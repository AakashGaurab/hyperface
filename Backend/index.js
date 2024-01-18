const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 3502 ;
const cors = require("cors");
const {connect} = require("./config/db");  // Database importing for connection
const rateLimit = require('express-rate-limit'); // importing rate limiter

const {user} = require("./routes/user");
const {auth} = require("./middleware/authentication");
const {course} = require("./routes/courseRoute");
const {audio} = require("./routes/audioRoute");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max requests per IP
});



app.use(cors({origin:"*"}));
app.use(express.json());

app.use("/user",limiter,user);
app.use("/course",limiter,auth,course);
app.use("/audio",limiter,auth,audio);


app.get("/",(req,res)=>{
    res.status(200).json("Hey")
})

app.use("/user",user);



app.listen(port,async()=>{
    try {
        await connect;  // connecting to db;
        console.log("Connected to db");
    } catch (error) {
       console.log(error); 
    }

    console.log(`Server running at http://localhost:${port}`)
})