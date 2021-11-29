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
    res.send('Server is online!');
});

const DB_CONNECTION_URL = process.env.MONGO_DB_URL;
const PORT = 5000;

mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(`Server: ${err}`));

mongoose.set('useFindAndModify', false);