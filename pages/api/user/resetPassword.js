import connectDB from '../../../utils/connectDB'
import User from '../../../models/userModel'
import auth from '../../../middleware/auth'
import bcrypt from 'bcrypt'

connectDB()

export default async (req, res) => {

    switch (req.method) {
        case "PATCH":
            await resetPassword(req, res)
            break
    }
}

const resetPassword = async (req, res) => {
    try {
        const result = await auth(req, res)
        const { password } = req.body
        console.log(password);
        const passwordHash = await bcrypt.hash(password, 12)

        await User.findOneAndUpdate({ _id: result.id }, {
            password: passwordHash
        })
        res.json({ msg: { success: "Update Success !" } })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}
