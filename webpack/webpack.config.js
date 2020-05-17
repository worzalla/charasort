module.exports = {
    entry: "./src/scripts/app.js",//path relative to this file
    output: {
        filename: "./dist/app.bundle.js"//path relative to this file
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              { loader: 'sass-loader' }
            ]
          }
        ]
      }
  }