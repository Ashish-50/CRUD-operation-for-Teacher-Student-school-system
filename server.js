const express = require("express");
const app = express();
const port = process.env.PORT||8008;
require("./model/connection")
const Router  = require("./router/school")


//this is a middleware for reading json file and showing
app.use(express.json()) // this is used to show data in json format 

app.use("/school",Router) ///school router


app.get("/",(req,res)=>{
    res.send("for accessing the working api please visit loalhost:8008/school")
})

app.listen(port,()=>{ // from this server is start
    console.log(`server started at port ${port}`)
})