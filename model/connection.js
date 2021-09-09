const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Ashish:Backend@cluster0.vgss5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database conneted")
}).catch((err)=>{
    console.log(err)
})
