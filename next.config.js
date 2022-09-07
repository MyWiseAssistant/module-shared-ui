/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: async (config, { configType }) => {
    // add scss support
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.unshift({ test: /\.svg$/, use: ['@svgr/webpack'] });

    return config;
  },
}

module.exports = nextConfig
