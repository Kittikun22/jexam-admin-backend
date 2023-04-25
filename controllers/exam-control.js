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

module.exports = {
    getAllExam
};