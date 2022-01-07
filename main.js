const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const {selectAlluser,adduser} = require("./user.js")
app.get("/users", async (req,res)=>{
const list = await selectAlluser();
console.log(list);
res.json(list);
});
app.post("/add-user",async(req,res)=>{
await adduser(req.body);
res.json("user added");
})
app.listen(4000,()=>{
console.log("server start");
})