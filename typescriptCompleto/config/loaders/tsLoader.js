module.exports = {
    test: /\.ts$/,
    use: [
        {
            loader: 'ts-loader',
        },
    ],
    exclude: /node_modules/,
}