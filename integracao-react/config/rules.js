module.exports = [
    {
        test: /\.js$/,
        use: [
            {
            loader: 'babel-loader',
            },
        ],
        exclude: /node_modules/,
    },
    {
        test:/\.ts/,
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
        },
        exclude: /dist/,
    },
    {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },
]