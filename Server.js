'use strict';

const
    express = require('express'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('./app/studentModel');

const StudentRouter = require('./app/studentRouter');

const app = express();


mongoose.connect('mongodb://localhost:27017/studentProfile', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});


app.use( express.static(__dirname ));

app.use('/app/modules', express.static(__dirname + '/bower_components'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});


app.use('/student', StudentRouter);


app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});