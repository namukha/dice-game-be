const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema ({
    count: {
        type: Number,
    },
    sum: {
        type: Number
    }
})

const History = mongoose.model('histories', HistorySchema);

module.exports = History;