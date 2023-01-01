const express = require("express")
const app = express();
const path = require("path");
const port  = process.env.PORT || 3000;


const staticpath = path.join(__dirname,"../public/landing_page.html")

app.set("view engine" , "hbs")
app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    res.render("landing_page.hbs")
})

app.listen((port),()=>{
    console.log(`app is running at ${port} port`)
})