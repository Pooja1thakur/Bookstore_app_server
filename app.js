const express=require("express")
const router=require("./routes/book-routes")
const mongoose=require('mongoose')
const app=express();
const cors=require('cors');
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);//localhost:5000/books







mongoose.connect("mongodb+srv://pooja:pooja2810rohit@cluster0.ii5lk0x.mongodb.net/bookStore").then(
   () =>console.log("connected to database")).then(()=>{
    app.listen(5000)
   }).catch((err)=>console.log(err));

