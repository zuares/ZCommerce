import connectDB from '../../../utils/connectDB'
import Order from '../../../models/orderModel'
import Product from '../../../models/productModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "PATCH":
            await paymentOrder(req, res)
            break;
    }
}

const paymentOrder = async (req, res) => {
    try {
        const result = await auth(req, res)
        const { id } = req.query

        await Order.findOneAndUpdate({ _id: id }, {
            paid: true, dateOfPayment: new Date().toISOString()
        })

        res.json({ msg: `Payment success` })

    } catch (error) {
        return res.status(500).json({ err: err.message })
    }
}