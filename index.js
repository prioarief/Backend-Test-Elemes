require('dotenv');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const routes = require('./src/module/routes');

const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1', routes);

app.listen(port, () => console.log('Server running on port', port));
