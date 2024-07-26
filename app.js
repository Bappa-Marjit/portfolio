const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, '/public')));


app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
});

app.get("/", (req,res)=>{
    res.render('home.ejs');
});
app.get('/contact', (req,res)=>{
    res.render('contact.ejs');
});
app.get('/about',(req,res)=>{
    res.render("about.ejs");
});

app.get('/login',(req,res)=>{
    res.render('login.ejs');
});
app.get('/logout',(req,res)=>{
    res.render('logout.ejs');
});