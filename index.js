const http=require("http"); //built-in
// const fs=require("fs");
// const url=require("url");
const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    return res.send('hello from home page');
});

app.get('/about', (req,res)=>{
    return res.send(`hello ${req.query.name}`);
});

// function myhandler(req,res){
//     if(req.url === "/favicon.ico") return res.end();
//     const log=`${Date.now()}: ${req.method} ${req.url} new req received\n`;
//     const myurl=url.parse(req.url, true);
//     // console.log(myurl);
//     fs.appendFile("log.txt",log, (err,data)=>{
//         switch(myurl.pathname){
//             case '/':
//                 if(req.method==='GET') res.end('homepage');
//             break
//             case '/about':
//                 const username=myurl.query.myname;
//                 res.end(`hi, ${username}`);
//             break
//             case '/signup':
//                 if(req.method==='GET') res.end('form rendered');
//                 else if(req.method=='POST'){
//                     //ek database query
//                     res.end('success');
//                 }
//             default: 
//                 res.end("not found 404 error");
//         }
        

//     });

// }

const myserver=http.createServer(app);

myserver.listen(8000,()=>console.log("done this thing"));
