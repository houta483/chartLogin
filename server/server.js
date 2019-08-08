const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controllers/userController');
const UserSchema = require('./models/userSchema');
const app = express();

mongoose.connect('mongodb+srv://houta483:Pitbull92929@cluster0-42vnx.gcp.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const port = 3000

app.use(cors());
app.use(bodyParser.json());

app.post('/test/login', userController.findUser, (req, res) => {
  res.status(200).redirect('insert Juans link here')
})


app.post('/test', userController.createUser, (req, res) => {
  res.status(200).json('user created');
})

app.use((err, req, res, next) => {
    console.log('err')
    res.status(505).json('Global Error Handler Invoked')
})

app.listen(port)
console.log(`now listening on port ${port}`);