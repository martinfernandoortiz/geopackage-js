var path = require('path');
var webpack = require('webpack');


// module.exports = {  
//   entry: { 
//     index: "./index.ts"
//   },
//   target: 'node',
//   module: {
//     loaders: [
//       { test: /\.ts(x?)$/, loader: 'ts-loader' },      
//       { test: /\.json$/, loader: 'json-loader' }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
//   ],
//   resolve: {
//     extensions: ['.ts', '.js', '.json']
//   },
//   output: {
//     libraryTarget: 'commonjs',
//     path: path.join(__dirname, 'lib'),
//     filename: '[name].js'
//   },
// };

// module.exports = {
//   entry: "./index.js",
//   output: {
//     libraryTarget: 'commonjs',
//     path: path.join(__dirname, 'jslib'),
//     filename: 'geopackage.js'
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js", ".json"]
//   },
//   module: {
//     rules: [
//       // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
//       {
//         test: /\.tsx?$/,
//         use: ["ts-loader"],
//         exclude: /node_modules/
//       }
//     ]
//   }
// };

module.exports = {
  entry: {
    'my-lib': './built/index.js',
    'my-lib.min': './built/index.js'
  },
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'GeoPackage',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  optimization: {
    minimize: true
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
      query: {
        declaration: false,
      }
    }]
  }
};