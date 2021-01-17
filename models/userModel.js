import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
        default: 'user',
    },

    root: {
        type: Boolean,
        required: true,
        default: false,
    },

    avatar: {
        type: String,
        required: true,
        default: `https://res.cloudinary.com/dporkqhiw/image/upload/v1610053935/samples/people/smiling-man.jpg`,
    },

},
    {
        timestamps: true
    }
)

const Dataset = mongoose.models.user || mongoose.model(`user`, userSchema);

export default Dataset;