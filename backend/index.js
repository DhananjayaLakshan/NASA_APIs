const express = require('express')
const dotenv = require('dotenv')
const userRoute = require('./routes/user.route.js')
const authRoute = require('./routes/auth.route.js')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')

dotenv.config()
mongoose.connect(process.env.MONGODB_CONNECTION).then(() => console.log('Database connected...')).catch((err) => {
    console.log(err);
})

const __dirnames = path.resolve();

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

app.use(express.static(path.join(__dirnames, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirnames, 'frontend', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


module.exports = app;