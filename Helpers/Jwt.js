const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const secretKey = process.env.SECRET_KEY;

const jwtAuthUser = function(user) {
const payload = {
              id      : user.id,
              id_unit : user.id_unit,
              regu    : user.regu,
              nama    : user.nama,
              email   : user.email,
              no_hp   : user.no_hp
            };
    const token = jwt.sign(payload, secretKey);
    return {status: true, message: "Log in success.", token, user};
}

const jwtAuthVerify = function(token) {
  try {const data = jwt.verify(token, secretKey)
     return User.findOne({id: data.id})}
  catch(err) {return false;}
  }

module.exports = {
        jwtAuthUser,
        jwtAuthVerify
};