/**
 * @author WMXPY
 * @namespace Server
 * @description Handler
 */

import { KunnConfig, KunnRoute } from "@kunn/core";
import * as Express from "express";

export const createKunnHandler = (kunn: KunnConfig): Express.Handler => {

    const version: number = kunn.version;
    const routes: KunnRoute[] = kunn.routes;

    return (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {

        const target: KunnRoute = routes.find((route: KunnRoute) => {

            return route.protocol === req.method.toUpperCase()
                || route.path === req.path;
        });
    };
};
