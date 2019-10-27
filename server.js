const express = require('express');
const app = express();
let port = 5000;

app.get('/',(req,res)=>{
res.send('server is runing')
});

app.listen(port,()=> console.log(`server i running on port ${port}`))
