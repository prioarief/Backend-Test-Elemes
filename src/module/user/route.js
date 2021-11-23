const express = require('express');
const wrapper = require('../../utilities/wrapper');
const router = express.Router();
const request = require('./request');

router.post('/register', async (req, res) => {
	return await request.register(req, res);
});

router.get('/', (req, res) => {
	res.send('haloooo');
});

module.exports = router;
