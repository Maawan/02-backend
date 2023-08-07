const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/" , (req , res)=>{
    res.status(200).json({
        message : "Yup !!! Server is up and running"
    })
})

app.get("/api/v1/instagram", (req,res)=>{
    res.status(200).json({
        username : "Mohd Mawan Ahmad",
        followers : 200,
        followers : 19,
        ServerTime : new Date().toLocaleDateString()
    })
})
app.get("/api/v1/facebook", (req,res)=>{
    res.status(200).json({
        username : "Mohd Mawan Ahmad facebook",
        followers : 200,
        followers : 19,
        ServerTime : new Date().toLocaleDateString()
    })
})
app.get("/api/v1/linkedin", (req,res)=>{
    res.status(200).json({
        username : "Mohd Mawan Ahmad linkedin",
        followers : 200,
        followers : 19,
        ServerTime : new Date().toLocaleDateString()
    })
})
app.get("/api/v1/:id",(req,res)=>{
    res.status(200).json({
        params : req.params.id
    })
})

app.get("/*",(req,res)=>{
    res.status(404).json({
        message : "Oops ! Page is not found"
    })
})
app.listen(PORT , () => {
    console.log(`Server started at ${PORT}`);
})