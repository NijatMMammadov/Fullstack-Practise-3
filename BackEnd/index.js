const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res) => {
    res.send("Welcome Node")
});

app.listen(3000, () => {
    console.log("bu app 300 portunda dinlənilir");
});

mongoose.connect("mongodb+srv://nicatmmab205:nijat205@af206.i3y14.mongodb.net/")
    .then(() => {
        console.log("Connected");
    });

let ProductSchema = new mongoose.Schema({
    name: String,
    title: String,
    isSale: Boolean,
    new: Boolean,
    price: Number,
    image: String
});

let ProductModel = mongoose.model("items", ProductSchema)

app.get("/items", async (req, res) => {
    let items = await ProductModel.find()
    res.send(items)
})

app.get("/items/:id", async (req, res) => {
    let id = req.params.id
    let myItem = await ProductModel.findById(id)
    res.send({
        message: "Success GetById",
        data: myItem
    })
})

app.delete("/items/:id", async (req, res) => {
    let id = req.params.id
    await ProductModel.findByIdAndDelete(id)
    res.send({
        message: "Success Delete"
    })
})

app.post("/items", async (req, res) => {
    let newItem = ProductModel(req.body)
    await newItem.save()
    res.send({
        message: "Success Post",
        data: res.body
    })
})

// app.put("/ite/:id",async(req,res)=>{

// })
