import jwt from 'jsonwebtoken'
import User from '../../../models/userModel'
import connectDB from '../../../utils/connectDB'

import { createAccessToken } from '../../../utils/tokenGenerator'

connectDB()

export default async (req, res) => {
    try {
        const rf_token = req.cookies.refreshToken;
        if (!rf_token)
            return res.status(400).json({ err: 'Please login ' })
        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if (!result)
            return res.status(400).json({ err: 'Your token is incorect or has expired ' })
        const user = await User.findById({ _id: result.id })
        if (!user)
            return res.status(400).json({ err: 'User doesnt exists' })

        const access_token = createAccessToken({ id: user._id })

        return res.json({
            access_token,
            user: {
                name: user.name,
                email: user.email,
                root: user.root,
                role: user.role,
                avatar: user.avatar,
            }
        })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}