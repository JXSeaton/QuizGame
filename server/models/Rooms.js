const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
	"quiz" : [
		{
			"Question": String,
			"A": String,
			"B": String,
			"C": String
		}

	]
});

const Room = mongoose.model("rooms", roomSchema);

module.exports = Room;