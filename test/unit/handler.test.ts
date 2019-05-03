/**
 * @author WMXPY
 * @namespace Server
 * @description Handler
 * @override Unit
 */

import Kunn from "@kunn/core";
import { expect } from "chai";
import * as Chance from "chance";
import { createKunnHandler } from "../../src/handler";
import { callMockExpressHandler, MockExpressResult } from "../mock/express";

describe('Given [Kunn-Handler] express handler', (): void => {

    const chance: Chance.Chance = new Chance('server-handler');

    it('should be able to response with 404', (): void => {

        const handler = createKunnHandler(Kunn.fromAny({
            version: 1,
            routes: [],
        }));

        const response: MockExpressResult = callMockExpressHandler(handler, {
            query: {},
            method: 'get',
        });

        expect(response).to.be.deep.equal({
            status: 404,
            result: undefined,
        });
    });
});
