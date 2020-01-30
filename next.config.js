const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();

console.log(localEnv);

module.exports = withBundleAnalyzer(
  withCSS({
    cssModules: false,
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
    webpack: config => {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      };
      config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx');

      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
          },
        },
      });

      return {
        ...config,
        node: {
          fs: 'empty',
        },
      };
    },
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      FACEBOOK_ID: process.env.FACEBOOK_ID,
      FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
      GOOGLE_ID: process.env.GOOGLE_ID,
      GOOGLE_SECRET: process.env.GOOGLE_SECRET,
      JWT_SECRET: process.env.JWT_SECRET,
    },
  })
);
