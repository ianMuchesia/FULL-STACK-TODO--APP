const express = require('express')
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
const port = 3000
require('dotenv').config()
//middleware
app.use(express.json())

//routes
app.use("/api/v1/tasks", tasks)



//start server
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()

