module.exports={
    entry:"./src/scripts.js",
    mode:"development",
    output:{filename:"bundle.js"},
    devServer: {
      port: 3000
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {presets: ["react"]}
            }
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ]
      }
};


