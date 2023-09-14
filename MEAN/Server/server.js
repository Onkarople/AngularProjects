express = require('express');


eobj = express();

port = 5100;



function StartServer()
{
    console.log("Marvellous Server started succesfully...");
}


eobj.listen(port,StartServer);


function GetMethod(request,response)
{
    response.send("Marvellous server is live ...");

}


eobj.get('/',GetMethod);
