const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventTitle: {type: String, required: true },
    eventStartDate: { type: Date, required: true },
    eventEndDate: { type: Date, required: true },
    eventDetails: String,
    eventLocation: {type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);