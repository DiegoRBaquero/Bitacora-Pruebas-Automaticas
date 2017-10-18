exports.config = {
  specs: [
    './tests/*.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
    }
  }],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  bail: 0,
  screenshotPath: './shots/',
  baseUrl: 'http://localhost:2368',
  waitforTimeout: 30000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 1,
  services: ['selenium-standalone'],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  }
}
