import connectDB from '../../../utils/connectDB'
import Product from '../../../models/productModel'
import { useReducer } from 'react'

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getProduct(req, res)
        default:
            break;
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.query.id
        const product = await Product.findById({ _id: id })

        if (product.err)
            return res.status(400).json({ err: `Product Not Found` })

        return res.json(product)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }

}