const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getAllExam = (req, res) => {
    db.query("SELECT * FROM exams INNER JOIN category ON exams.category_id = category.category_id INNER JOIN subject ON exams.subject_id = subject.subject_id ORDER BY exam_id DESC",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        })
}

const getExamCategory = (req, res) => {
    db.query("SELECT * FROM category",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        })
}

const getExamSubject = (req, res) => {
    db.query("SELECT * FROM subject",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        })
}

const createNewExam = (req, res) => {
    const name = req.body.name
    const detail = req.body.detail
    const pic = req.body.pic
    const amount = req.body.amount
    const category_id = req.body.category_id
    const subject_id = req.body.subject_id

    db.query("INSERT INTO exams (name, detail, amount, pic, category_id, subject_id) VALUES (?,?,?,?,?,?)",
        [name, detail, amount, pic, category_id, subject_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const addBluePrint = (req, res) => {
    const exam_id = req.body.exam_id
    const bluePrint = req.body.bluePrint
}

const updateBluePrint = (req, res) => {
    const exam_id = req.body.exam_id
    const newBluePrint = req.body.newBluePrint
}

const addExamInfo = (req, res) => {
    const exam_id = req.body.exam_id
    const exam_info = req.body.exam_info

    db.query("UPDATE exams SET exam_info = ? WHERE exam_id = ?",
        [exam_info, exam_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateExamInfo = (req, res) => {
    const exam_id = req.body.exam_id
    const newExamInfo = req.body.newExamInfo
}

const addExamContent = (req, res) => {
    const exam_id = req.body.exam_id
    const exam_content = req.body.exam_content

    db.query("UPDATE exams SET exam_content = ? WHERE exam_id = ?",
        [exam_content, exam_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateExamContent = (req, res) => {
    const exam_id = req.body.exam_id
    const newExamContent = req.body.newExamContent
}

module.exports = {
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
};