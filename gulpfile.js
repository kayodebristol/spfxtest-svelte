'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);


const sourcemaps = require('gulp-sourcemaps');

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
      generatedConfiguration.module.rules.push(
        {
          test: /\.m?js$/, use:
          {
            loader: "babel-loader",
            options:
            {
              exclude:  [/node_modules\/(core-js)/,/node_modules\/(babel)/ ] ,
              include: [ 'node_modules/sp-svelte-classification-banner/**' ],
              presets: [["@babel/preset-env",
                {
                    targets: 'IE 10',
                  useBuiltIns: 'usage',
						corejs: 3
                }]],
                plugins: [
                    '@babel/plugin-syntax-dynamic-import',
                        [
                            '@babel/plugin-transform-runtime',
                            {
                                corejs: 3,
                              
                                
                            }
                        ]
                    ]
            }
          }
        }
      );
  
      return generatedConfiguration;
    }
  });
build.initialize(gulp);
