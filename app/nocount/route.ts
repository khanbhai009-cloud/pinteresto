/* GET /nocount — owner utility page (not linked anywhere, not in the
   sitemap, noindex). Visiting it flags THIS device so the analytics
   beacon never counts it: sets the cc_nocount cookie (which /api/t also
   honours server-side) and the matching localStorage key (which the
   client beacon checks before sending anything).
   /nocount?off=1 clears both — the device is counted again. */

export const dynamic = "force-dynamic";

const ONE_YEAR = 60 * 60 * 24 * 365;

function page(off: boolean): string {
  const title = off ? "Counting is back on" : "You are no longer counted";
  const message = off
    ? "This device will be counted again."
    : "This device will no longer be counted in site stats.";
  const script = off
    ? "try{localStorage.removeItem('cc_nocount')}catch(e){}"
    : "try{localStorage.setItem('cc_nocount','1')}catch(e){}";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${title} — The Cozy Canvas</title>
<style>
  body{margin:0;background:#FBF7F2;color:#2B211D;font-family:Georgia,'Times New Roman',serif;
       display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px}
  main{background:#fff;border:1px solid #EFE3DC;border-radius:18px;max-width:420px;width:100%;
       padding:32px 28px;text-align:center}
  h1{font-size:22px;margin:0 0 10px}
  p{font-size:16px;line-height:1.6;margin:0}
  small{display:block;margin-top:14px;color:#8A7468;font-size:13px}
</style>
</head>
<body>
<main>
  <h1>${title}</h1>
  <p>${message}</p>
  <small>Owner utility — this page is not linked from the site.</small>
</main>
<script>${script}</script>
</body>
</html>`;
}

export async function GET(req: Request): Promise<Response> {
  const off = new URL(req.url).searchParams.get("off") === "1";
  const cookie = off
    ? "cc_nocount=; Path=/; Max-Age=0; SameSite=Lax"
    : `cc_nocount=1; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax`;
  return new Response(page(off), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Set-Cookie": cookie,
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
