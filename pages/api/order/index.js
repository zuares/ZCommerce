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
            user: result.id, address, mobile, cart, total
        })
        cart.filter(item => {
            return sold(item._id, item.quantity, item.inStock, item.sold)
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

const sold = async (id, quantity, oldInStock, oldStock) => {
    await Product.findOneAndUpdate({ _id: id }, {
        inStock: oldInStock - quantity,
        sold: quantity + oldStock
    })
}