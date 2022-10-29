const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "micro-frontend",
    projectName: "dashboard",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
    output: {
      filename: 'dashboard.bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  });
};
