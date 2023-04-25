const express = require('express');
const cors = require('cors');
require('dotenv').config()
const approveRoutes = require('./routes/approve-route')
const examRoutes = require('./routes/exam-route')


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(approveRoutes);
app.use(examRoutes)


app.listen(8333, () => {
    console.log("Server is running on port :8333");
});