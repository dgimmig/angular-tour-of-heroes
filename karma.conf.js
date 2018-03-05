// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    customLaunchers: {
      ChromeHeadless:  {
        base:   'Chrome',
        flags:  [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222'
        ],
      }
    },    
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    port: 9876,
    browsers: ['Chrome'],
    singleRun: false
  });
};
