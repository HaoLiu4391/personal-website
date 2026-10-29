const { execSync } = require("child_process");

// Short hash of the commit being built, shown in the footer.
function commit() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7);
  try {
    return execSync("git rev-parse --short=7 HEAD").toString().trim();
  } catch {
    return "";
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/personal-website",
  assetPrefix: "/personal-website/",
  images: {
    unoptimized: true,
  },
  env: {
    COMMIT: commit(),
  },
};

module.exports = nextConfig;
