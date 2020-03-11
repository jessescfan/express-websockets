// import { Listing } from "#root/db/models";

import * as WebSocket from "ws";
import {server} from "./startServer";

const setupRoutes = app => {

  const wss = new WebSocket.Server({server});

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('something');
  });

};

export default setupRoutes;