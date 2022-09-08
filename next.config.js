/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(
          __dirname,
          'node_modules',
          '@mywiseassistant',
          'module-shared-ui',
          'dist'
        ),
      ],
      sideEffects: false,
      use: [defaultLoaders.babel],
    });
    return config;
  }
}

module.exports = nextConfig
