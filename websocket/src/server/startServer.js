import bodyParser from "body-parser";
import cors from "cors"
import express from "express";
import * as http from 'http';
import setupRoutes from "./routes";
import setupWebSockets from "./sockets";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

export const server = http.createServer(app);

setupRoutes(app);
setupWebSockets(server);

server.listen(8989, "0.0.0.0", () => {
  console.info(`Express WS app listening on 8989`)
});
