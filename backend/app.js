const express = require('express')
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")

const port = 3000
require('dotenv').config()
//middleware
app.use(express.json())

app.use((req, res, next) => {
    const allowedOrigins = "https://phenomenal-sopapillas-ba237e.netlify.app";
    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

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

