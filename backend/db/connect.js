const mongoose = require("mongoose")

const connectDB = (url)=>{
    return mongoose.connect(url,{
        //if you are using v6 you dont need to do this
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true

    })
}


module.exports = connectDB