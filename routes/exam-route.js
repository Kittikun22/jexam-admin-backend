const express = require('express')

const {
    getAllExam,
    getExamCategory,
    getExamSubject,
    createNewExam,
    addBluePrint,
    updateBluePrint,
    addExamInfo,
    updateExamInfo,
    addExamContent,
    updateExamContent
} = require('../controllers/exam-control')

const examRoute = express.Router()

examRoute.get('/getAllExam', getAllExam)
examRoute.get('/getExamCategory', getExamCategory)
examRoute.get('/getExamSubject', getExamSubject)
examRoute.post('/createNewExam', createNewExam)
examRoute.post('/addExamContent', addExamContent)
examRoute.post('/addExamInfo', addExamInfo)

module.exports = examRoute