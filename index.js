const express = require('express');
require('./dbconnect');
const product= require('./product');
const app = express();
app.use(express.json());

app.post("/create",async (res,req)=>{
    let data = new product(res.body);
    let result = await data.save();
    console.log(result);
    let msg= "Data Inserted Successfully";
    req.send({
        Data:msg 
    });
})

app.get("/list",async(res,req)=>{
    let result = await product.find({});
    console.log(result);
    req.send({
        Data:result
    })
})

app.post("/delete",async(res,req)=>{
    // let data = new product(res.body);
    let result = await product.deleteOne(res.body);
    console.log(result);
    req.send({
        Data:"Data Deleted Successfully..."
    });
})

app.post("/update", async(res,req)=>{
    let result = await product.updateOne
})








// const main= async ()=>{
// await mongoose.connect(url)

// const modal = new mongoose. ('emptable',schema)

// let data= new modal({firstname:"goku",lastname:"tom",mobileno:9970640622,address:"vasai"})
// let result = await data.save();
// console.log(data)
// }

// main();

// const updateINDB= async ()=>{
//     await mongoose.connect(url)
//     const product = mongoose.model('emptables',schema);
//     let data = await product.updateOne({firstname:"goku"},{$set:{mobileno:"8087340377"}})
//     console.log(data);


// }

// updateINDB();

// to get data
// const finddata = async ()=>{
//     await mongoose.connect(url)
//     
//     let data= await product.find({});
//     console.log(data);
// }

// finddata();


app.listen(5000, () => {
    console.log("Server is running on port :5000");
})