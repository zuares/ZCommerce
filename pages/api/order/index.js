import connectDB from '../../../utils/connectDB'
import Order from '../../../models/orderModel'
import Product from '../../../models/productModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await createOrder(req, res)
        default:
            break;
    }
}

const createOrder = async (req, res) => {
    try {
        const result = await auth(req, res)
        const { address, mobile, cart, total } = req.body

        const newOrder = new Order({
            user: result._id, address, mobile, cart, total
        })
        newOrder.save()

        return res.json({
            msg: 'Payment Success',
            newOrder
        })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}