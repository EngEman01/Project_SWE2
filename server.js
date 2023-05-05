import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import subjectRouter from './routes/subjects.js'

dotenv.config();

mongoose.connect(process.env.mongoConnectionUrl)
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use ('/subjects',subjectRouter);












app.listen(process.env.port, () => {
    console.log(`started the application on http://localhost:${process.env.port}`);
})