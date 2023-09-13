function index(req , res){
    // res.send("<h1> Hello form main controller.js<h1>");
    // const students = ['Galal' , 'Moahmed' , 'Ahmed']
    res.render('pages/index.ejs'  , 
    {title : "Home Page"} ); 
}

function about(req , res){
    res.render('pages/about.ejs' , 
    {title : "About Page"}); 
}

function contact(req , res){
    res.render('pages/contact.ejs' , 
    {title : "Contact Page"}); 
}

function SAMPLEPOST(req , res){
    res.render("pages/SAMPLEPOST.ejs" , 
    {title: "SAMPLE POST page"});
}
module.exports = {
    index,
    about,
    contact,
    SAMPLEPOST 
    
}