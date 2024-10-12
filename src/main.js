const {NestFactory} = require('@nestjs/core');

const AppModule = require('./app.module');

const AppController = require('./app.controller');

const AppService = require('./app.service');

const express = require('express');

async function bootStrap() {
  
  const app = await NestFactory.create(AppModule);

  app.use(express.json());

  const appService = new AppService();

  const appController = new AppController(appService);

  app.getHttpAdapter().get('/', (req, res) => appController.getHello(req, res));

  await app.listen(3000);

}

bootStrap();




