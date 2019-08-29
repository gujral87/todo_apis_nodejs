// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://superman:superman123@ds359077.mlab.com:59077/project_todo_db', {useNewUrlParser: true});

mongoose.Promise = Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    console.log("w're connected!");
});

const todoSchema = new mongoose.Schema({
    "task": {type: String, required: true},
    "category": Array,
    "timeCreated": { type: Date, default: Date.now, required: true },
    "completed": {type: Boolean, required: true, default : false}
});

export const todo_model = mongoose.model('todo', todoSchema);
