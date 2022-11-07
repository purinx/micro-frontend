const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');
const Dotenv = require('dotenv-webpack');

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'micro-frontend',
    projectName: 'auth',
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    entry: './src/index.tsx',
    plugins: [new Dotenv()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  });
};
