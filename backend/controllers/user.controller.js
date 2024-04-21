const bcrypt = require('bcryptjs')
const errorHandler = require('../utils/error')
const User = require('../models/user.model')

const updateUser = async (req, res, next) => {

    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this user'))
    }

    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(400, 'Password must be at least 6 characters')
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10)
    }

    if (req.body.userName.includes(' ')) {
        return next(errorHandler(400, 'Username cannot contains sapces'))
    }

    if (!req.body.userName.match(/^[a-zA-Z0-9]+$/)) {
        return next(errorHandler(400, 'Username can only contains letters and numbers'))
    }

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: {
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
            },
        }, { new: true })

        const { password, ...rest } = updateUser._doc
        res.status(200).json({ message: 'User updated successfully', rest })

    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return (next(errorHandler(403, "You are not allowed to delete this user")))
    }

    try {
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json({ message: 'User has been deleted' })
    } catch (error) {
        next(error)
    }
}

const signout = async (req, res, next) => {
    try {
        res.clearCookie('access_token').status(200).json("User has been signed out")

    } catch (error) {
        next(error)
    }

}

module.exports = { updateUser, deleteUser, signout }