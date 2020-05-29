const express = require('express');
const cors = require('cors');
const app = express();
const queryRouter = require("./router/query");
const {default:axios} = require("axios")
app.use(cors());
app.use(express.json());
app.use(["/query"],queryRouter);
axios.post("http://localhost:6000/events/subscribe",{
    eventType:"createdPost",
    url:"http://localhost:7000/query/post"
}).then(({data})=>console.log(data)).catch(console.log);
axios.post("http://localhost:6000/events/subscribe",{
    eventType:"createdComment",
    url:"http://localhost:7000/query/comment"
}).then(({data})=>console.log(data)).catch(console.log);

app.listen(7000,()=>{
    console.log("listening on 7000")
});