const UserSchema = require('../models/userSchema');

const userController = {
  
  createUser(req, res, next) {
    console.log('req.body:', req.body)
    UserSchema.create(req.body, (err, doc) => {
      if (err) {
        next(err);
      } else {
        res.locals.doc = doc;
        next();
      }
    })
  },

    findUser(req, res, next) {
      console.log('REQ BODY IN FINDUSER OUTSIDE OF FINDONE', req.body);
    UserSchema.findOne({ username: req.body.username, password: req.body.password }, (err, doc) => {
      console.log('INSIDE FINDONE', req.body)
      if (err) { console.log(err) }
      else if (doc === null){
        console.log('Account does not exist. Please create account.');
        next();
      }
      else {
      next();
      }
    }
  )},
}

module.exports = userController;