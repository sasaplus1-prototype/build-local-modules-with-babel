const path = require('path');

module.exports = function(env) {
  return [
    {
      context: __dirname,
      entry: {
        index: path.resolve(__dirname, 'src/index.js'),
      },
      mode: 'none',
      module: {
        rules: [
          {
            exclude: /node_modules/,
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          },
        ],
      },
      output: {
        chunkFilename: 'chunk-[id]-[hash].js',
        filename: '[name].js',
        path: __dirname,
        publicPath: './',
      },
      target: 'web',
    },
  ];
};
