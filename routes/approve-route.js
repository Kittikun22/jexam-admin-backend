const express = require('express')

const {
    getAllSlip,
    approveSlip,
    notApproveSlip
} = require('../controllers/approve-control')

const approveRoute = express.Router()

approveRoute.get('/getAllSlip', getAllSlip)
approveRoute.post('/approveSlip', approveSlip)
approveRoute.post('/notApproveSlip', notApproveSlip)

module.exports = approveRoute