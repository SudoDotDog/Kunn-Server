/**
 * @author WMXPY
 * @namespace Server
 * @description Handler
 */

import Kunn, { Agent, PROTOCOL } from "@kunn/core";
import * as Express from "express";

export const createKunnHandler = (kunn: Kunn): Express.Handler => {

    return (req: Express.Request, res: Express.Response) => {

        const target: Agent<any> | null = kunn.match(req.path, req.method.toUpperCase() as PROTOCOL);

        if (!target) {
            res.status(404).send();
        }

        const response: Record<string, any> = target.response(Date.now());
        res.send(response);
    };
};
