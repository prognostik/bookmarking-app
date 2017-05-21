// Karma configuration
// Generated on Thu Mar 09 2017 18:51:49 GMT+0300 (RTZ 2 (зима))
//
//
// @see http://webpack.github.io/docs/usage-with-karma.html



var karmaWebpack = require('karma-webpack'),
    karmaJasmine = require('karma-jasmine'),
    karmaSpecReporter = require('karma-spec-reporter'),
    karmaChromeLauncher = require('karma-chrome-launcher');



module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'public/libs.min.js',
        'public/libs2.min.js',
        'public/app.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'client/test/test.spec.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    preprocessors: {
        // add webpack as preprocessor
        // 'public/libs.min.js': ['webpack'],
        // 'public/libs2.min.js': ['webpack'],
        // 'public/app.js': ['webpack'],
        // 'node_modules/angular-mocks/angular-mocks.js': ['webpack'],
        'client/test/test.spec.js': ['webpack']
    },


    webpack: {
        // you don't need to specify the entry option because
        // karma watches the test entry points
        // webpack watches dependencies

        // ... remainder of webpack configuration (or import)
    },


    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i.e.
        noInfo: true,
        // and use stats to turn off verbose output
        stats: {
            // options i.e.
            chunks: false
        }
    },


    plugins: [
        karmaWebpack, karmaJasmine, karmaSpecReporter, karmaChromeLauncher
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // I installed karma-spec-reporter plugin to pretty print results and changed the value "progress" here to "sped"
    // @see https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
