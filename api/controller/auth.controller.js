import User from "../model/user.model.js";
import bcrypt from 'bcrypt';
export const signup=async(req,res)=>{
    const { username, email, password }= req.body
    //salt 10 number will added with our password and encrypt or hash password
    const hashedPassword =bcrypt.hashSync(password,10)
    //using user model store data from insomnia
    const newUser= new User({username,email,password:hashedPassword});
    // we used try catch block for return error in console of insomnia only when we have duplicated or repeated values.
    try{
      await newUser.save()
      // But password wasn't encrypted
      res.status(201).json('user created successfully')
    }catch(error){
        res.status(500).json(error.message);
    }
};