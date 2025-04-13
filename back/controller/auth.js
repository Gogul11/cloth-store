const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userModel = require('../model/userModel')

const signIn = async (req, res) => {
       try {
            const user = await userModel.findOne({
                $or : [
                    {username : req.body.username},
                    {phone : req.body.phone},
                    {email : req.body.email}
                ]
            });

            if(user)
                return res.status(200).json({success : 3, message : "User already registered"});

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt)

            console.log(req.body)

            const newUser = new userModel({
                username : req.body.username,
                password : hashedPassword,
                phone : req.body.phone,
                email : req.body.email
            })

            newUser.save();

            if(newUser)
                return res.status(200).json({success : 1, message : "Registered successfully"})

            return res.status(200).json({success : 2, message : "Something went wrong"})
            
       } catch (error) {
            console.log(error.message)
            return res.status(404).json({error : error.message});
       }
}

const login = async (req, res) => {
    try {
        const{email, password} = req.body;

        const user = await userModel.findOne({email : email })

        if(!user)
            return res.status(200).json({success : 3, message : "User with email not registered, Please Register"});

        if(!await bcrypt.compare(password, user.password))
            return res.status(200).json({sucess : 1, message : "Incorrect Password"})

        return res.status(200).json({success : 1})

    } catch (error) {
        console.log(error.message)
        return res.status(404).json({error : error.message});
    }
}

module.exports = {signIn, login};