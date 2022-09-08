import path from 'path';

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.tsx',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: 'swc-loader',
        },
      },
    ],
  },
};
