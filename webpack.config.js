//Konfiguracja Webpack
var path = require("path");
module.exports = {
    entry:"./js/app.jsx",
    output: {
        filename: "./js/out.js" },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    mode: "development",
    watch: true,
    devtool:"#eval-source-map",
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-2", "react"]
                    }
                }
            }
        ]
    }
};
