//node server is part of core module

//core module to create

//importing core module

const http=require('http');

const fs=require('fs');

const path=require('path');


//set port and hostname
const port=3500;

const hostname="localhost";



//create server using http module ;http.createServer((req,res))
const server=http.createServer((req,res)=>

{
	
	//console.log(req.header);
	
	console.log('request for '+req.url+' by method '+req.method);
	
	if(req.method=='GET')
	{
		
      let fileURL;
	 //start
	 if(req.url=='/')
	 {
		 
		 fileURL="/index.html";
		 
		 
	 }
	 
	 else
	 {
		 
		 fileURL=req.url;
		 
	 }
	 //it will make a absolute path
	 
	 let filepath=path.resolve('./public'+fileURL);
	 
	 const fileext=path.extname(filepath);
	 
	 //check extension
	 if(fileext=='.html')
	 {
		 //check file existance in folder
		
		fs.exists(filepath,(exists)=>{
			 
			 if(!exists)
			 {
				 res.statusCode=404;
	
	             res.setHeader('Content-Type','text/html');
	
	             res.end('<html><h4>error 404</h4></html>');
	
				 
			 }

				 res.statusCode=200;
	
	             res.setHeader('Content-Type','text/html');
	   
				 fs.createReadStream(filepath).pipe(res);
				 
			 
			 
		 })//end of fat arrow
		 
		 
	 }
	 
	 else
	 {
		 
		 
					 res.statusCode=404;
	
	                 res.setHeader('Content-Type','text/html');
	
	                 res.end('<html><h4>Not a Html file</h4></html>');
	 
		 
		 
	 }
	 
	 //end
		
		
	}
	
	else
	{
					 res.statusCode=404;
	
	                 res.setHeader('Content-Type','text/html');
	
	                 res.end('<html><h4>Not supported</h4></html>');
	
		
		
	}
	
	
	
	//res.statusCode=200;
	
	//res.setHeader('Content-Type','text/html');
	
	//res.end('<html><h4>Server Connection Sucecess</h4></html>');
	
	
	
});


//start server

server.listen(port,hostname,()=>{
	
console.log(`server running at http://${hostname}:${port}`);	
	
});