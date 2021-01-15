import connectDB from '../../../utils/connectDB'
import Product from '../../../models/productModel'

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getProducts(req, res)
        default:
            break;
    }
}

const getProducts = async (req, res) => {
    try {
        const data = await Product.find();
        if (!data)
            return res.status(400).json({ err: `Product Empty` });

        return res.json(data)

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }

}