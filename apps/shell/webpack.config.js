const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'micro-frontend';
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'shell',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(
    defaultConfig,
    {
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: 'src/index.ejs',
          templateParameters: {
            isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
            orgName,
            process: { ...process, env: {} },
          },
        }),
      ],
    },
    {
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
    },
  );
};
