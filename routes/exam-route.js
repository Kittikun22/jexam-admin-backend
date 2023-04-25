const express = require('express')

const {
    getAllExam
} = require('../controllers/exam-control')

const examRoute = express.Router()

examRoute.get('/getAllExam', getAllExam)

module.exports = examRoute