//import express from 'express';
import {asyncHandler} from '../utils/AsyncHandler.js'
const signup =  (req, res) => {
   // console.log("controller")
    res.send("Signup route")
}

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