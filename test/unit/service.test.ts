/**
 * @author WMXPY
 * @namespace Server
 * @description Service
 * @override Unit
 */

import Kunn from "@kunn/core";
import { expect } from "chai";
import * as Chance from "chance";
import * as Express from "express";
import { createKunnServer } from "../../src";

describe('Given [createKunnServer] function', (): void => {

    const chance: Chance.Chance = new Chance('kunn-server-service');

    it('should be able to create express instance', (): void => {

        const kunn: Kunn = Kunn.fromAny({
            [chance.string()]: chance.string(),
        } as any);
        const app: Express.Express = createKunnServer(kunn);

        expect(app.get('x-powered-by')).to.be.equal(false);
    });
});
