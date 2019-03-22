const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = {
  login: (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
      if (error) {
        console.log(error);
      } else {
        if (!user) {
          return res.status(401).send("Invalid Email");
        } else {
          bcrypt.compare(userData.password, user.password, (err, result)=>{
            if(err){
                console.log(err);
            }else{
                if(result===true){
                    let payload ={ subject:user._id}
                    let token =jwt.sign(payload,"secretKey");
                    return res.status(200).send({token});
                }else{
                 return res.status(401).send("Invalid Password")
                }
            }
          })
          
        }   
        
      }
    });
  },

  register: (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
      if (error) {
        console.log(error);
      } else {
        if (user) {
          return res.status(401).send("Email Already Exists");
        } else {
          addUser(userData);
        }
      }
    });

    addUser = (userData) => {
      let user = new User(
        userData,
        (userData.password = User.hashPassword(userData.password))
      );
      user.save((error, registeredUser) => {
        if (error) {
          console.log(error);
        } else {
            let payload = {subject:registeredUser._id}
            let token = jwt.sign(payload,'secretKey')
          res.status(200).send({token });
        }
      });
    };
  }
};
