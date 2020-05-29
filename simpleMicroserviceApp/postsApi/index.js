const express = require('express');
const cors = require('cors');
const app = express();
const postsRouter = require("./router/posts");
app.use(cors());
app.use(express.json());
app.use(["/posts"],postsRouter);

app.listen(4000,()=>{
    console.log("listening on 4000")
});