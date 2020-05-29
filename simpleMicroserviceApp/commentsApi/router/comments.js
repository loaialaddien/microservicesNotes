const postsRouter = require('express').Router();
const { randomBytes } = require("crypto");
const { default: axios } = require("axios");
const comments = {};

postsRouter.get("/:id/comments", (req, res) => {
    const { id } = req.params;
    res.send(comments[id] || []);
});

postsRouter.post("/:id/comments", async (req, res) => {
    //we need to make sure that this post actually exists
    const commentId = randomBytes(4).toString("hex");
    const { id } = req.params;
    const { content } = req.body;
    const savedComment = {
        postId: id,
        commentId,
        content
    }
    comments[id] ? comments[id].push(savedComment) : comments[id] = [savedComment];
    axios.post("http://localhost:6000/events/publish", {
        eventType: "createdComment",
        payLoad: savedComment
    }).then(res => {
        console.log(res);
        res.status(201).send(savedComment);
    });
})

module.exports = postsRouter;