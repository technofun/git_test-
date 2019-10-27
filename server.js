const express = require('express');
const app = express();
let port = 5000;


app.listen(port,()=> console.log(`server i running on port ${port}`))