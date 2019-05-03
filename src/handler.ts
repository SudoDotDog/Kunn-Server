/**
 * @author WMXPY
 * @namespace Server
 * @description Handler
 */

import Kunn, { Agent, PROTOCOL } from "@kunn/core";
import * as Express from "express";

export const createKunnHandler = (kunn: Kunn): Express.Handler => {

    return (req: Express.Request, res: Express.Response): boolean => {

        const target: Agent<any> | null = kunn.match(req.path, req.method.toUpperCase() as PROTOCOL);

        if (!target) {

            res.status(404).send();
            return;
        }

        const hasBody: boolean =
            req.method.toUpperCase() === PROTOCOL.POST
            || req.method.toUpperCase() === PROTOCOL.DELETE
            || req.method.toUpperCase() === PROTOCOL.PUT;

        const isValid: boolean = hasBody ? target.request({
            query: req.query,
            body: req.body,
        }) : target.request({
            query: req.query,
        });

        if (isValid) {

            const response: Record<string, any> = target.response(Date.now());
            res.send(response);
        } else {

            res.status(400).send();
        }
        return;
    };
};
