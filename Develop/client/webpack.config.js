const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'html info'
      }),

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      })

      new WebpackPwaManifest({
        fingerprints: false,
        inject:true,
        name: 'Contact Cards',
        short_name: 'Contact',
        description: 'text editor app',
        background_color: 
  

      })

      
    ],

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude:/node_modules/,
          use: {
            loader:'babel-loader',
            options: {
              preset: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', @babel/transform-runtime'],
            }
          }
        }
        
      ],
    },
  };
};
