'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },

    citizenship: {
        type: String

    },
    language: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },

});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;