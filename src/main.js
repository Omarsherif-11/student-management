const {NestFactory} = require('@nestjs/core');

const mongoose = require('mongoose');

const AppModule = require('./app.module');

const AppController = require('./app.controller');

const AppService = require('./app.service');

const StudentController = require('./student.controller');

const StudentService = require('./student.service');

const express = require('express');

async function bootStrap() {
  
  const app = await NestFactory.create(AppModule);

  await mongoose.connect('mongodb://localhost:27017/Students', {})
  .then(
    () => console.log('Connected'))
    .catch(
      () => console.log('Failed')
    )

  app.use(express.json());

  const appService = new AppService();

  const appController = new AppController(appService);

  const studentService = new StudentService();

  const studentController = new StudentController(studentService);

  app.getHttpAdapter().get('/', (req, res) => appController.getHello(req, res));

  app.getHttpAdapter().get('/student', (req, res) => studentController.findAllStudents(req, res));

  app.getHttpAdapter().get('/student/:id', (req, res) => studentController.findStudent(req, res));

  app.getHttpAdapter().delete('/student/:id', (req, res) => studentController.deleteStudent(req, res));

  app.getHttpAdapter().post('/student', (req, res) => studentController.addStudent(req, res));

  app.getHttpAdapter().patch('/student/:id', (req, res) => studentController.updateStudent(req, res));

  await app.listen(3000);

}

bootStrap();




