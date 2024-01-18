const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req,res,next)=>{
    let token = req.headers.token;
    jwt.verify(token,process.env.key,(err,decoded)=>{
        if (err){
            res.status(404).json({"msg":"Invalid token"});
        }
        else {
            next();
        }
    })
}


module.exports={auth};