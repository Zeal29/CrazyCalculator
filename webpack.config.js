const path = require("path");

module.exports = {
    entry  : "./src/app.ts",
    devtool: "inline-source-map",
    mode: "production",
    output : {
        path    : path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module : {
        rules: [
            {
                test  : /\.ts$/,
                loader: "ts-loader"
            }
        ]
    }
};
