const queryRouter = require('express').Router();
const {randomBytes} = require("crypto");

const posts = {};

queryRouter.get("/",(req,res)=>{
    
    res.send(posts);
});

queryRouter.post("/post",(req,res)=>{
    const {payLoad:{id}, payLoad} = req.body;
    posts[id] = payLoad;
    
   
});
queryRouter.post("/comment",(req,res)=>{
    const {payLoad:{commentId,postId,},payLoad} = req.body;
    posts[postId].comments = posts[postId].comments ? posts[postId].comments.concat({...payLoad}) : [{payLoad}];
    
});


module.exports = queryRouter;