express = require('express');
eobj=express();

eobj.listen(5100,function()
{
    console.log("Serever started succesfully...!");
});


eobj.get('/',function(req,res)
{
    res.send("Server  is live at root /");
});


eobj.get('/PPA',function(req,res)
{
    res.send("this is the information of PPA Batch:");
});


eobj.get('/Angular',function(req,res)
{
    res.send("this is the information of Angular Batch:");
});



