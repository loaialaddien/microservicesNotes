const postsRouter = require('express').Router();
const {randomBytes} = require("crypto");
const { default: axios } = require("axios");
const posts = {};


postsRouter.get("/",(req,res)=>{
    res.send(posts);
});

postsRouter.post("/",(req,res)=>{
    const id = randomBytes(4).toString("hex");
    const {title} = req.body;
    posts[id] = {
        id,
        title
    }
    axios.post("http://localhost:6000/events/publish", {
        eventType: "createdPost",
        payLoad: posts[id]
    }).then(res => {
        console.log(res);
        res.status(201).send(posts[id]);
    }).catch(console.log);
})

module.exports = postsRouter;