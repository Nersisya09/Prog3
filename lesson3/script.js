var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});

app.get("/google/:search", function(req,res){
    const searchvalue = req.params.search


    res.redirect("https://google.com/search?q=" + searchvalue)
  
     

})
app.get("")
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});	