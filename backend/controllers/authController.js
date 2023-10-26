import User from '../models/userModel.js';
import bcrypt from "bcryptjs";
export const signup =  async (req, res,next) => {
    // console.log(req.body);
    // return  res.json({'body': req.body});
    const {username,email,password} =  req.body;
// hashing password
    // let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(password, 10);
    // const result =  await User.deleteMany()
    try{
        const user =  await  User.create({username,email,password:hashedPassword});    
        return  res.status(201).json('User created successfully');

    }catch(err){
        // return res.json(err);
        next(err)

    }
            
           
    
  }