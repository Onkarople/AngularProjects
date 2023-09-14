const express=require('express');
const obj=express();

const {MongoClient}=require("mongodb");
const URL="mongodb://0.0.0.0:27017/";


const client=new MongoClient(URL); //connect ho url shi



obj.listen(5100,function()
{
   console.log("Marvellous Server Started succesfully..!");
});

obj.get('/',function(req,res)
{
   res.send("Server is live");
});




obj.use((req,res,next)=>{

    res.header("Access-Control-Allow-Origin","http://localhost:4200");

    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with,Content-Type,Accept");

    next();

});





async function getConnection()
{
    let result= await client.connect();  //to connect with dbms
    let db =result.db("Marvellous");     //to connect with database Marvellous
    return db.collection("hr"); //to connect with collectio name batches
}



///////////////////////////////////////////////////////////////
//readdata
//used to read the data from databse
//
////////////////////////////////////////////////////////////

async function readData(req,res)
{
   let data=await getConnection();
   data=await data.find().toArray();
   console.log("Data From Marvellos Database is : ");
   console.log(data);
   res.send(data);
}

///to delete the data

async function deleteData()
{
   let data=await getConnection();
   let result=await data.deleteOne({"Batch":"PPA"});
   if(result.acknowledged)
   {
      console.log("Delete operation is performed succefully");
   }
  
}


async function InsertData()
{
   let data=await getConnection();
   let result=await data.insertOne({"Batch":"PPA","Fees":18500});

   if(result.acknowledged)
   {
      console.log("Inserted succesully");
   }
   
  
}


//to update in
async function updateData()
{
   let data=await getConnection();
   let result=await data.updateOne({"Batch":"PPA"},{$set: {"Fees":18000}});

   if(result.acknowledged)
   {
      console.log("updated succesully");
   }
   
  
}



obj.get('/gethr',(req,res)=>
{
    let gethr=[
        [{"Name":"OM","Age":23,"Salary":1000},{"Name":"akash","Age":25,"Salary":2000},{"Name":"ganesh","Age":21,"Salary":3000}],
        [{"Name":"demo","Age":22,"Salary":2000}]
    ]

    res.json(gethr);
});




//
function main()
{
   
  
  readData();


}



//Startter of the application
//main();