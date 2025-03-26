const Room = require('../../models/Rooms');

const getAll = function(req, res){
	Room.find().then(function(rooms){
		return res.status(200).json(rooms);
	}).catch(function(err){
		return res.status(500).json({error: err});
	})
};

const getById = function(req, res){
	const room_id = req.params.room_id;
	Room.findById(room_id).then(function(room_info){
		return res.status(200).json(room_info);
	}).catch(function(err){
		return res.status(400).json({error: err});
	});
};

const addRoom = function(req, res){
	const body = req.body;
	const newRoom = new Room(body);
	if(!newRoom){
		return res.status(400).json({error: "Did not provide correct data"});
	}
	newRoom.save().then(function(savedRoom){
		return res.status(201).json(savedRoom);
	}).catch(function(err){
		return res.status(500).json({error: err});
	});
};

module.exports = {
	getAll,
	getById,
	addRoom
};