module.exports = function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).json({
      status: "error",
      message: "Method not allowed"
    });
  }

  return res.status(200).json({
    status: "ok",
    service: "playroom-game-hub",
    runtime: "vercel-serverless",
    timestamp: new Date().toISOString(),
    games: {
      browser: ["adarkroom", "clumsy-bird", "hextris"],
      desktopSource: ["Snowboarder", "TuxVsDragon"]
    }
  });
};
