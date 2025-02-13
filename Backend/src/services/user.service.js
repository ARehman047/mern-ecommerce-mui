const User = require("../models/user.model");
const Address = require("../models/address.model");
const bcrypt = require('bcrypt');
const jwtProvider = require('../config/jwtProvider.js')

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        let userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error(`User with this email already exists: ${email}`);        }

        password = await bcrypt.hash(password, 8)

        const user = await User.create({ firstName, lastName, email, password });
        console.log('This user is created: ', user)
        return user;

    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserById = async (userId) => {
    try {
        let user = await User.findById(userId)
        // .populate('address');
        if (!user) {
            console.log('User does not exist')
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserByEmail = async (userEmail) => {
    try {
        let user = await User.findOne({email: userEmail});
        if (!user) {
            console.log('User does not exist')
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);

        const user = await getUserById(userId);

        if (!user) {
            console.log('User does not exist')
        }
        const addresses = await Address.find({ _id: { $in: user.address } });

        return  { ...user.toObject(), address:addresses };

    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllUsers = async() => {
    try {

        const allUsers = await User.find().populate('address');
        return allUsers;

    } catch (error) {
        throw new Error(error.message);   
    }
}

const deleteUserByID =async(userId) => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error) {
        throw new Error(error.message); 
    }
}

module.exports = { createUser, getUserById, getUserByEmail, getUserProfileByToken, getAllUsers, deleteUserByID };