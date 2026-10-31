/* Rate limiting for /api/t — ARCHITECTURE §4.3.
   Uses Upstash Redis REST when UPSTASH_REDIS_REST_URL/TOKEN are set
   (60 events/minute/IP, fixed window). Without Upstash configured it falls
   back to a simple in-memory fixed window so local dev and the pre-launch
   build behave the same way; the interface stays identical. */
import "server-only";

const LIMIT = 60;
const WINDOW_SEC = 60;

const memory = new Map<string, { count: number; resetAt: number }>();

function memoryLimit(key: string): boolean {
  const now = Date.now();
  const entry = memory.get(key);
  if (!entry || entry.resetAt <= now) {
    memory.set(key, { count: 1, resetAt: now + WINDOW_SEC * 1000 });
    return true;
  }
  entry.count += 1;
  return entry.count <= LIMIT;
}

/** `namespace` separates buckets per route ("t" = /api/t, "sub" =
    /api/subscribe) so each public write has its own per-IP budget. */
export async function rateLimit(ip: string, namespace = "t"): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return memoryLimit(`${namespace}:${ip}`);

  const windowId = Math.floor(Date.now() / (WINDOW_SEC * 1000));
  const key = `${namespace}:${ip}:${windowId}`;
  try {
    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, String(WINDOW_SEC)],
      ]),
    });
    if (!res.ok) return memoryLimit(`${namespace}:${ip}`);
    const data = (await res.json()) as { result: number }[];
    return (data[0]?.result ?? 0) <= LIMIT;
  } catch {
    return memoryLimit(`${namespace}:${ip}`);
  }
}
