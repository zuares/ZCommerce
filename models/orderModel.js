import mongoose from 'mongoose';

const orderShcema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    address: String,
    mobile: String,
    cart: Array,
    total: Number,
    delivered: {
        type: Boolean,
        default: false
    },
    paid: {
        type: Boolean,
        default: false
    },
    dateOfPayment: Date,

}, {
    timestamps: true
})

let Dataset = mongoose.models.order || mongoose.model('order', orderShcema);

export default Dataset;