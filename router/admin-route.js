const User = require("../models/User");

const getAllUsers = async (req, res)=>{
    try{
        const users = await User.find();
}catch (error){
        nextT(error)
    }
};