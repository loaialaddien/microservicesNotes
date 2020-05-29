const express = require('express');
const cors = require('cors');
const app = express();
const busRouter = require("./router/eventBus");
app.use(cors());
app.use(express.json());
app.use(["/events"],busRouter);

app.listen(6000,()=>{
    console.log("listening on 6000")
});