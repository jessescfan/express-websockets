import {Topic, Channel, Score} from "#root/db/models";

const setupRoutes = (app) => {
  app.get("/channels", async (req, res, next) => {
    const channels = await Channel.findAll();

    return res.json(channels);
  });

  app.get("/channels/:id", async (req, res, next) => {

    const channels = await Channel.findByPk(req.params.id);

    return res.json(channels);
  });

  app.post("/channels", async (req, res, next) => {
    if (!req.body.name || !req.body.createdBy) {
      return next(new Error("Invalid Body"));
    }

    try {
      const channel = await Channel.create({
        name: req.body.name,
        createdBy: req.body.createdBy,
      });

      return res.json(channel);
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
};

export default setupRoutes;