const express = require('express')

const {
    getAllExam,
    getExamCategory,
    getExamSubject
} = require('../controllers/exam-control')

const examRoute = express.Router()

examRoute.get('/getAllExam', getAllExam)
examRoute.get('/getExamCategory', getExamCategory)
examRoute.get('/getExamSubject', getExamSubject)

module.exports = examRoute