// base
import path from 'path';
import webpack from 'webpack';

// plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';

// postcss loaders
import autoprefixer from 'autoprefixer';

// config
import getConfig from './config';

// build type
const production = (process.env.npm_lifecycle_event === 'prod') ? true : false;
const watch = (process.env.npm_lifecycle_event === 'dev') ? true : false;

// configuration
const config = getConfig();

const scriptName = 'main';
const jsName = `${scriptName}.js`;
const cssName = `${scriptName}.css`;

const compilePath = config.path && config.path.length ?
config.path.join('\\') :
path.join(__dirname, 'dist');
const publicPath = (production || watch) ? config.publicPath : '/';

const title = config.title;

const allCss = config.cssVendors ?
config.cssVendors
.map(v => `${publicPath}vendors/${v}`)
.concat([`${publicPath}${cssName}`]) :
[`${publicPath}${cssName}`];

const allJs = config.jsVendors ?
config.jsVendors
.map(v => `${publicPath}vendors/${v}`)
.concat([`${publicPath}${jsName}`]) :
[`${publicPath}${jsName}`];

const rootContainerClass = "root";

console.log(compilePath);

module.exports = {
  entry: config.entry,
  output: {
    path: compilePath,
    filename: jsName,
    publicPath: publicPath
  },
  module: {
    rules: [
      // pass all js to babel for ES6 => ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader',
        }
      },
      // copy file and remove extension for compatibility with Sharepoint
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=json/[name].json',
        ],
      },
      // no modules for css files, just autoprefix and sourcemap.
      // Compiled onto the same .css file as the .scss.
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      // compile sass, add prefixes, add sourcemaps and export css modules.
      // Compile in one css file.
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: ["style-loader"],
          use: [
            {
              loader: 'css-loader',
              options : {
                url: false,
                sourceMap: true,
                modules: true,
                importLoaders: true,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                plugins: function () {
                  return [
                    require("autoprefixer")
                  ];
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                data: `$fontsPath: './fonts/';`
              }
            }
          ]
        })
      },
      {
        test: /\?styleTag$/,
        exclude: /node_modules/,
        use: [
          'style-loader?insertAt=top',
          'css-loader?url=false',
          'sass-loader',
        ],
      },
      // all images are exported as is in img/
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?{pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 100}, gifsicle: {interlaced: false}, optipng: {optimizationLevel: 7}}',
        ],
      },
      {
        test: /\.cur$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=cursor/[hash].[ext]',
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=svg/[hash].[ext]',
        ],
      },
      // all fonts are exported as is in fonts/
      // no svg fonts authorized
      {
        test: /.(woff(2)?|eot|ttf|otf)(\?[a-z0-9=\.]+)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\?external$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=vendors/[name].[ext]',
        ],
      }
    ],
  },
  devtool: (!production ? 'source-map' : ''),
  resolve: {
    plugins : [
      // used to require by folder name
      // lib/someScript/someScript.js can be required as require('lib/someScript')
      new DirectoryNamedWebpackPlugin(),
      function() {
        this.plugin('watch-run', function(watching, callback) {
          console.log('Begin compile at ' + new Date());
          callback();
        });
      }  
    ],
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },
  // autoprefix all necessary css rules
  // postcss: function postcss() {
  //     return [autoprefixer({ browsers: ['> 0%'], remove: false })];
  // },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  // is resolved relative to this directory
  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules
  // externals: ["react", /^@angular\//],
  // Don't follow/bundle these modules, but request them at runtime from the environment
  stats: "errors-only",
  plugins: (
    [
      // exports all scss into one css file at root
      new ExtractTextPlugin(cssName, {
        allChunks: true,
      }),
      // define global variables to be used in js files
      new webpack.DefinePlugin({
        PROD: production,
        PUBLICPATH: JSON.stringify(publicPath),
        WATCH: watch,
        CURCONFIG: JSON.stringify(config.name),
      }),
      // build an index.html from the .ejs template file
      // add script and link with right paths, using outputs and publicpath
      new HtmlWebpackPlugin({
        title,
        template: config.template,
        rootContainerClass,
        files: {
          css: allCss,
          js: allJs,
        },
        inject: false,
      }),
      // used to replace vars in .txt
      new StringReplacePlugin(),
    ]
    .concat(
      // minify css && js in production
      production ?
      [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
        }),
      ]
      : []
    )
  ),
  performance: {
    hints: production || watch ? "warning" : false
  },
  node: {
    fs: 'empty',
    net: 'empty'
  }
}
