const express = require('express');
// import express from 'express';
const port = process.env.PORT || 4000;
const app = express();
const clientRouter = require('./routes/clientRouter');
const logRouter = require('./routes/logRouter');
// import { createServer as createViteServer } from 'vite';

app.use(express.json());

// TASKS FOR BACKEND

// 1. get request to get 10 latest queries from our SQL Db
// 2. get request to get a specific query from our SQL DB

// const vite = await createViteServer({
//   server: { middlewareMode: true },
//   appType: 'custom',
// });
// app.use(vite.middlewares);

app.use('/user', clientRouter);
app.use('/log', logRouter);

app.use('*', (req, res) => res.status(404).send('Not Found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
