const express = require('express');

eobj=express();


eobj.use(express.json());


port=5100;


eobj.listen(port,function(){

    console.log("server started succesfully...!");

});


eobj.get('/',function(req,res){
    res.send("marvellous Server is live ..! and this is the root");
});


batches=[
    {id:1,name:"PPA",duration:"3 Months"},
    {id:2,name:"LB",duration:"3.5 Months"},
    {id:3,name:"PYTHON",duration:"3 Months"},
    {id:4,name:"LSP",duration:"5 Months"},
];

//read the data from databse(GET)

eobj.get('/getbatches',ReadData);

function ReadData(req,res)
{
    res.send(batches);
}


eobj.get('/getbatches/:id',ReadDataID);

function ReadDataID(req,res)
{
    var icnt=0;

    for( icnt=0;icnt<batches.length;icnt++)
    {
        if(batches[icnt].id == req.params.id)
        {
            break;
        }
    }
    
    if(icnt==batches.length)
    {
        res.status(400).send("there is no such batch");
    }
    else
    {
        res.send(batches[icnt]);
    }
}


//delete the data
eobj.delete('/getbatches/:id',(req,res)=>
{
   var icnt=0;
   for(icnt=0;icnt<batches.length;icnt++)
   {
    if(batches[icnt].id==req.params.id)
    {
        break;
    }
   }

    if(icnt==batches.length)
    {
        res.status(404).send("There is no such batch to delete")

    }
    else
    {
        batches.splice(icnt,1);
        res.send(batches);
    }
});

//to create data
eobj.post('/batches',(req,res)=>
{
   const newdata={
    id:batches.length+1,
    name:req.body.name,
    duration:req.body.duration
   };

   batches.push(newdata);
   res.send(batches);

});


//update the data from database (put)

eobj.put('/getbatches/:id',function(req,res)
{
   var icnt=0;

   for(icnt=0;icnt<batches.length;icnt++)
   {
     if(batches[icnt].id==req.params.id)
     {
        break;
     }
   }

    if(icnt==batches.length)
    {
        res.status(404).send("There  is no such record");
    }
    else
    {
       batches[icnt].name=req.body.name;
       batches[icnt].duration=req.body.duration;


       res.send(batches[icnt]);
    }
});