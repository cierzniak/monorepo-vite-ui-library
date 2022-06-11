const { patchWebpackConfig } = require('next-global-css')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    patchWebpackConfig(config, options);

    return config;
  },
};

module.exports = nextConfig;
