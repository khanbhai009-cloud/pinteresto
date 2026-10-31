"use client";

/* Tracking beacon — ARCHITECTURE §4.3/§6.1.
   - 'pv' on load: path, referrer, utm params, viewport width.
   - 'end' on page hide: time on page + max scroll depth (percent).
   - 'click': a delegated listener catches clicks on affiliate links
     (a[data-pid]) and beacons { pid, slug } — the link itself is never
     changed, delayed or redirected.
   No cookies, no names, no emails (§6.1). Sends with navigator.sendBeacon;
   falls back to fetch keepalive. The server route returns 204 always. */
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function send(payload: Record<string, unknown>) {
  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/t", new Blob([body], { type: "application/json" }));
    } else {
      void fetch("/api/t", { method: "POST", body, keepalive: true });
    }
  } catch {
    /* tracking must never break the page */
  }
}

function basePayload() {
  const params = new URLSearchParams(window.location.search);
  return {
    path: window.location.pathname,
    ref: document.referrer || "",
    utm_source: params.get("utm_source") || "",
    utm_campaign: params.get("utm_campaign") || "",
    w: window.innerWidth,
  };
}

export function Beacon({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled) return;
    const startedAt = Date.now();
    let maxScroll = 0;

    send({ t: "pv", ...basePayload() });

    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      if (total > 0) {
        const pct = Math.round((window.scrollY / total) * 100);
        if (pct > maxScroll) maxScroll = pct;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a[data-pid]") as HTMLAnchorElement | null;
      if (!a) return;
      send({
        t: "click",
        pid: a.dataset.pid,
        slug: a.dataset.slug,
        ...basePayload(),
      });
    };
    document.addEventListener("click", onClick, true);

    const onHide = () => {
      if (document.visibilityState !== "hidden") return;
      onScroll();
      send({
        t: "end",
        ...basePayload(),
        dur: Math.round((Date.now() - startedAt) / 1000),
        scroll: maxScroll,
      });
    };
    document.addEventListener("visibilitychange", onHide);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, [enabled, pathname]);

  return null;
}
