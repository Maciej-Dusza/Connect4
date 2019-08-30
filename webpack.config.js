module.exports={
    entry:"./src/scripts.js",
    mode:"development",
    output:{filename:"bundle.js"},
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {presets: ["react"]}
            }
          }
        ]
      }
};


