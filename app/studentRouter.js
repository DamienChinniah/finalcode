'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const studentModel = mongoose.model('Student');


const Router = express.Router();


Router.get('/', (req, res) => {
    studentModel.find().exec().then(student => {
        res.json(patient);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    studentModel.findById(id).exec().then(student => {
        res.json(student || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const patient = new studentModel(req.body);
    patient.save().then(student => {
        res.json(student);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const student = req.body;
    delete student._id;
    const studentId = req.params.id;
    studentModel.findByIdAndUpdate(studentId, {$set: student}).then(studentDb => {
        res.json(student);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    studentModel.findByIdAndRemove(req.params.id).then((student) => {
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});



module.exports = Router;