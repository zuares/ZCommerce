import User from '../../../models/userModel'
import connectDB from '../../../utils/connectDB'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../../../utils/tokenGenerator'



connectDB()

export default async (req, res) => {

    switch (req.method) {
        case "POST":
            return await login(req, res)
        default:
            break;
    }

}


const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ err: 'This email doesnt exists' })
        const checkPass = await bcrypt.compare(password, user.password)
        if (!checkPass)
            return res.status(400).json({ err: 'Password incorect' })
        const refresh_token = createRefreshToken({ id: user._id })
        const access_token = createAccessToken({ id: user._id })

        return res.json({
            access_token,
            refresh_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root
            }
        })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
} 