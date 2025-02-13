const userService = require('../services/user.service')

const getUserProfile = async(req, res) => {

    try {
        const jwt = req.headers.authorization?.split(" ")[1]; //User token = [User, token], by this logic, token in accessed

        if(!jwt){
            return res.status(404).send({error: 'Token not Found'})
        }

        const user = await userService.getUserProfileByToken(jwt)

        return res.status(200).send(user)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers = async(req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).send(users)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteUser = async(req, res) => {
    try {
        await userService.deleteUserByID(req.params.userId)
        return res.status(200).send()
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {getUserProfile, getAllUsers, deleteUser}