const path = require('path');

module.exports = {
  entry: './src/app/SoqlParser.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'soql-parser.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SOQLParserJS',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};