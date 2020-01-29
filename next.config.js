const withCSS = require('@zeit/next-css')
// const withImages = require('next-images')
// const withTypescript = require('@zeit/next-typescript')
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS({
    webpack(config, {isServer}) {
      config.module.rules.push({
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      });
      config.module.rules.push({
        test: /\.properties/,
        use: 'raw-loader'
      })
      
      config.node = {fs: 'empty'};

      
      return config;
    }
  }));