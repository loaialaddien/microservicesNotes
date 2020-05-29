const express = require('express');
const cors = require('cors');
const app = express();
const commentsRouter = require("./router/comments");
app.use(cors());
app.use(express.json());
app.use(["/posts"],commentsRouter);

app.listen(5000,()=>{
    console.log("listening on 5000")
});