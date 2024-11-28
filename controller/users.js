import{User} from "../model/mongoDB/user.js";
import bcrypt from "bcrypt";
const saltRounds = 10 ;


 export const userController ={
    async registerUser(req,res){
        const {fullName,email} = req.body;
        const password = await bcrypt.hash(req.body.password,saltRounds);
        const data ={fullName,email,password};
        const newUser = new User(data);
        try {
            const savedUser = await newUser.save();
            res
            .status(201)
            .json({sucess:true,message:"user registered",data:savedUser});
        } catch (error) {
            res
            .status(500)
            .json({sucess:false,message:"internal Error" + err.message})
        }
            
        },
        async loginUser(req,res){
            const user = await User.find().where({email : req.body.email});
            if(!user.length){
                return res.status(401).json({sucess:false,message:"incorrect email or password"});
            
        }
        const hashedPassword = user[0].password;
        const math = await bcrypt.compare(req.body.password,hashedPassword);
        if(!match){
            return res.status(401).json({sucess:false,message:"incorrect email or password"});
        }
        const accessToken =  await token.gerate(user[0]);
        res
        .status(200)
        .json({success:true,message:"user logged in",data:accessToken});
    },

};