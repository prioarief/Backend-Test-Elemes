require('dotenv');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const multer = require('multer');
const app = express();
const routes = require('./src/module/routes');
const wrapper = require('./src/utilities/wrapper');

const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1', routes);
app.use(function (err, req, res, next) {
    if (err instanceof multer.MulterError) wrapper(res, false, null, "thumbnail is required", 400)
    else next(err);
  });

app.listen(port, () => console.log('Server running on port', port));
