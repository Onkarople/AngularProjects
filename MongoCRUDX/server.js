
const {MongoClient}=require("mongodb");
const URL="mongodb://0.0.0.0:27017/";


const client=new MongoClient(URL); //connect ho url shi

///////////////////////////////////////////////////////////////
//getConecction
//used to connect with monodbserver-database-collection
//
////////////////////////////////////////////////////////////


async function getConnection()
{
    let result= await client.connect();  //to connect with dbms
    let db =result.db("Marvellous");     //to connect with database Marvellous
    return db.collection("Batches"); //to connect with collectio name batches
}



///////////////////////////////////////////////////////////////
//readdata
//used to read the data from databse
//
////////////////////////////////////////////////////////////

async function readData()
{
   let data=await getConnection();
   data=await data.find().toArray();
   console.log("Data From Marvellos Database is : ");
   console.log(data);
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




//
function main()
{
   
  updateData();
  readData();


}

//Startter of the application
main();