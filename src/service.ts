/**
 * @author WMXPY
 * @namespace Server
 * @description Service
 */

import * as BodyParser from "body-parser";
import * as Express from "express";

export const createKunnServer = (): Express.Express => {

    const app: Express.Express = Express();

    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({
        extended: true,
    }));

    app.use((_: Express.Request, res: Express.Response, next: Express.NextFunction) => {

        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

        res.header("X-Powered-By", "Kunn");

        next();
    });

    return app;
};
