const express = require('express');

const apiCalls = require('./controllers/roomController');

const router = express.Router();

router.get('/room', apiCalls.getAll);
router.get('/room/:room_id', apiCalls.getById);
router.post('/room', apiCalls.addRoom);

module.exports = router;
