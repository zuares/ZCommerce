import connectDB from '../../../utils/connectDB'
import User from '../../../models/userModel'
import validate from '../../../utils/validate'
import bcrypt from 'bcrypt'


connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            return await register(req, res)
        default:
            return null
    }
}

const register = async (req, res) => {
    try {
        // Tangkap request dari form
        const { name, email, password, password2 } = req.body

        // Validasi ulang
        const errMsg = validate(req.body)
        if (errMsg)
            return res.status(400).json({ err: errMsg })

        // Cek Email
        const user = await User.findOne({ email })
        if (user)
            return res.status(400).json({ err: 'this Email has already exists' })

        const passwordHash = await bcrypt.hash(password, 12)

        // Buat data
        const newUser = new User({
            name, email,
            password: passwordHash
        })

        // Save data
        await newUser.save()

        // Kirimkan response
        return res.json({
            msg: 'Register Success'
        })


    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}
