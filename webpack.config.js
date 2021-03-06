let path = require('path');
module.exports = {
    entry: {
        App: "./app/assets/scripts/app.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    }, // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        // options related to how webpack emits results

        path: path.resolve(__dirname, "./app/temp/scripts"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: "[name].js", // string
        // the filename template for entry chunks
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }

}