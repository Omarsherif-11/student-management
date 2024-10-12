const AppController = require('./app.controller');

const AppService = require('./app.service');

const StudentController = require('./student.controller');

const StudentService = require('./student.service');

class AppModule {

  constructor() {

    this.controllers = [AppController, StudentController];

    this.providers = [AppService, StudentService];
  }

}

module.exports = AppModule;