const { execSync } = require("child_process");

function git(args) {
  try {
    return execSync(`git ${args}`).toString().trim();
  } catch {
    return "";
  }
}

// Short hash and date of the commit being built, shown in the footer.
function commit() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7);
  return git("rev-parse --short=7 HEAD");
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
    UPDATED: git("log -1 --format=%cs"),
  },
};

module.exports = nextConfig;
