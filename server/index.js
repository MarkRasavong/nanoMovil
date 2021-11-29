import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'bodyParser';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
    res.send('Server is running!');
});