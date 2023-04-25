const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getAllSlip = (req, res) => {
    db.query("SELECT * FROM slip INNER JOIN users ON slip.user_id = users.user_id ORDER BY upload_at DESC",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        })
}

const approveSlip = (req, res) => {
    const slip_id = req.body.slip_id
    const user_id = req.body.user_id
    const exams = JSON.parse(req.body.exams)
    const updateStatus = "อนุมัติแล้ว"

    const examArr = exams.map((val) => '(' + user_id + ',' + val + ')')

    db.query("UPDATE slip SET status = ?, approved_at = NOW() WHERE slip_id = ? ",
        [updateStatus, slip_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                db.query('INSERT INTO user_exams (user_id, exam_id) VALUES ' + examArr.join(','),
                    examArr,
                    (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send({ message: 'success' })
                        }
                    })
            }
        })
}

const notApproveSlip = (req, res) => {
    const slip_id = req.body.slip_id
    const updateStatus = "ไม่อนุมัติ"

    db.query("UPDATE slip SET status = ? WHERE slip_id = ? ",
        [updateStatus, slip_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        })
}

module.exports = {
    getAllSlip,
    approveSlip,
    notApproveSlip
};