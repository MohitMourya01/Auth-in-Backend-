//import express from 'express';
import { ApiError } from '../utils/ApiError.js';
import {asyncHandler} from '../utils/AsyncHandler.js'
import bcryptjs from 'bcryptjs'
import {User} from '../model/user.model.js'
import { generateVerificationToken } from '../utils/generateVerificationToken.js';

import {ApiResponse} from "../utils/ApiResponse.js"
import {generateTokenAndSetCookie} from "../utils/generateTokenAndSetCookie.js"
const signup = asyncHandler(async (req, res) => {
   // console.log("controller")
   const {email, password, name} = req.body;
   
    if(!email || !password || !name){
    // [email, name , password].some((field) => field?.trim() === "") 
        throw new ApiError(400,"All Fields are requiredd")
    }

    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new ApiError(409, "User with email already exists")
        // return res.status(400).json({success: false, message: "User Already exists"})
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const verificationToken = generateVerificationToken();

    const user = new User({
        email, 
        password: hashedPassword,
        name,
        verificationToken,
        verificationTokenExpiresAt: Date.now() + 24*60*60*1000 // 24 hours
    })

    await user.save();

    // jwt
    generateTokenAndSetCookie(res, user._id);

    return res.status(201).json({
        success: true,
        message: "User created successfully",
        user: {
            ...user._doc,
            password: undefined
        }
    })
   
    //res.send("Signup route")
})

const loginUser = (req, res) => {
    res.send("login user")
}

const logoutUser = (req, res) => {
    res.send("logout user")
}

export {
    signup,
    loginUser,
    logoutUser
}