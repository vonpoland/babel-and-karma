// Karma configuration
// Generated on Sat May 21 2016 11:04:38 GMT+0200 (Central European Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs','jasmine'],
    plugins: [
      'karma-systemjs',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    systemjs: {
      serveFiles: [
          'node_modules/**/*.js', // thanks to http://stackoverflow.com/questions/35728497/using-karma-systemjs-produces-404-for-dependencies
          'public/js/*.js'
      ],
      config: {
        defaultJSExtensions: true,
        transpiler: 'plugin-babel',
        paths: {
          'systemjs': 'node_modules/systemjs/dist/system.js',
          'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
        }
      }
    },
    // list of files / patterns to load in the browser
    files: [
      'tests/*.js'
    ],
    testFileSuffix: "unit.js",

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
