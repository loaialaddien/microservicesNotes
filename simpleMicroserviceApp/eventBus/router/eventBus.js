const busRouter = require('express').Router();
const { randomBytes } = require("crypto");
const { default: axios } = require("axios")
const subscribers = {};
const events = {};

busRouter.post("/subscribe", (req, res) => {
    const { eventType, url } = req.body;
    subscribers[eventType] ? subscribers[eventType].push({ url }) : subscribers[eventType] = [{ url }];
    if (events[eventType]) {
        const prevEvents = events[eventType].map(({ eventType, payLoad }) => axios.post(url, { eventType, payLoad }));
        Promise.all(prevEvents).then(response => {
            console.log(response)
            res.status(200).send(`you're now subscribed to ${eventType} and previous events were sent`)
        }).catch(console.log);

    } else {

        res.status(200).send(`you're now subscribed to ${eventType}`);
        console.log(`subscribed ${subscribers}`)
    }
})


busRouter.post("/publish", (req, res) => {
    const { eventType, payLoad } = req.body;
    events[eventType] ? events[eventType].push({eventType, payLoad}) : events[eventType] = [{eventType, payLoad}];
    const callbacks = subscribers[eventType].map(({ url }) => axios.post(url, { eventType, payLoad }));
    Promise.all(callbacks).then(response => {
        console.log(response)
        res.status(200).send("message published")
    }).catch(console.log);

})

module.exports = busRouter;