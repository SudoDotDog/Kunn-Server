/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import Kunn, { KunnConfig, TYPE } from "@kunn/core";
import * as HTTP from "http";
import { createKunnServer } from "../src/";

const config: KunnConfig = {
    version: 1,
    routes: [{
        path: '/a',
        protocol: 'GET',
        request: {
            query: {
                hello: {
                    type: TYPE.STRING,
                },
            },
            response: {},
        },
    }],
};

const kunn = Kunn.fromConfig(config);
const server = createKunnServer(kunn);

HTTP.createServer(server).listen(8000);
server.on('error', console.log);
