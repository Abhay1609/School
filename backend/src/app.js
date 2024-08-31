const express =require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser")
const loggerMiddleware=require('./middlewares/loggerMiddleware')
const app=express()
const db=require('./configs/db')


app.use(cors({
    origin:process.env.COR_ORIGIN,
    credentials:true
}))
app.use(express.json())
// app.use(express.urlencoded({extended:true}));
// app.use(express.static("public"));
// app.use(cookieParser())
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});




module.exports = app;