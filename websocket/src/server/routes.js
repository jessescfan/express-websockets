import { Topic, Channel, Score } from "#root/db/models";

import * as WebSocket from "ws";

const setupRoutes = (app, server) => {

  app.get("/channels", async (req, res, next) => {
    const channels = await Channel.findAll();

    return res.json(channels);
  });

  app.post("/channels", async (req, res, next) => {
    if (!req.body.name || !req.body.createdBy) {
      return next(new Error("Invalid Body"));
    }

    try {
      const topic = await Channel.create({
        name: req.body.name,
        createdBy: req.body.createdBy,
      });

      return res.json(topic);
    } catch (e) {
      return next(e);
    }
  });

  app.get("/topics", async (req, res, next) => {

    const topics = await Topic.findAll();

    return res.json(topics);
  });

  app.post("/topics", async (req, res, next) => {
    if (!req.body.name || !req.body.createdBy) {
      return next(new Error("Invalid Body"));
    }

    try {
      const topic = await Topic.create({
        name: req.body.name,
        createdBy: req.body.createdBy,
        channelId: req.body.channelId
      });

      return res.json(topic);
    } catch (e) {
      return next(e);
    }
  });

  const wss = new WebSocket.Server({ server });

  wss.on('connection', async function connection(ws, req) {
    ws.on('message', async function incoming(message) {
      console.log(message);
      wss.clients.forEach(function each(client) {
        client.send(message);
      });

      return message;
    })
  });
};

export default setupRoutes;