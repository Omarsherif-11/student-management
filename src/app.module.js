const AppController = require('./app.controller');

const AppService = require('./app.service');

class AppModule {

  constructor() {

    this.controllers = [AppController];

    this.providers = [AppService];
  }

}

module.exports = AppModule;