import express from 'express'
import  mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload'
const PORT = 5000;
const app = express()
const DB_Url =`mongodb+srv://user:user@cluster0.ct08j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)
app.use(fileUpload({}))

async function startApp(){
    try{
        await mongoose.connect(DB_Url)
        app.listen(PORT, ()=>console.log("Post has"))
    }catch (e) {
        console.log(e)
    }
}

startApp();
