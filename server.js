import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import subjectRouter from './routes/subjects.js'
import departments from "./models/departments.js";
import subjects from "./models/subject.js";
import doctorRoutes from "./routes/doctorRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"

dotenv.config();

// const express = require("express")
// const authRoutes = require("./routes/authRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/project")
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))


app.get('/create', (req, res) => {
    res.render("./subjects/create.handlebars")
})

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/', studentRoutes)

app.use("/", doctorRoutes);

app.use('/subjects', subjectRouter);

app.listen(process.env.port, () => {
    console.log(`started the application on http://localhost:${process.env.port}`);
});