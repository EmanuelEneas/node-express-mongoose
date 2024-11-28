import jws from "jsonwebtoken";
const secret = process.env.JWT_SECRET;



export const token = {
async generate(user){
const userForToken ={
fullName:user.fullName,
email:user.email,
    };


return jwt.sign(userForToken,secret,{expiresIn:"1h"});
},
async validate(req,res,next){
    const token =req.headers?.authorization?.split(" ")[1];
    if(token){
        jwt.verify(token,secret,(err,decoded )=> {
            if(err){
                return res
                .status(401)
                .json({success :false,message:"Invalid or expired token"});
            }
            req.decoded = decoded;
            next();
        });
    } else{
        res.status(401).json({success:false,message :"no token provided"});
    }
},

};