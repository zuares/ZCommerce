import mongoose from 'mongoose'

const connectDB = () => {

    if (mongoose.connections[0].readyState == true) {
        console.log(`Terhubung`);
        return
    }

    mongoose.connect(`${process.env.DB_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }, err => {
        if (err) throw new err
        console.log(`Tidak terhubung`);
    })

}

export default connectDB