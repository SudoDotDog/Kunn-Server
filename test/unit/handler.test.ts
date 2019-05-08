/**
 * @author WMXPY
 * @namespace Server
 * @description Handler
 * @override Unit
 */

import Kunn, { PROTOCOL, TYPE } from "@kunn/core";
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
            result: "NOT FOUND",
        });
    });

    it('should be able to response with random result', (): void => {

        const route: string = chance.word();
        const queryKey: string = chance.word();
        const responseKey: string = chance.word();

        const handler = createKunnHandler(Kunn.fromAny({
            version: 1,
            routes: [{
                path: '/' + route,
                protocol: PROTOCOL.GET,
                request: {
                    query: {
                        [queryKey]: {
                            type: TYPE.STRING,
                        },
                    },
                    response: {
                        [responseKey]: {
                            type: TYPE.STRING,
                        },
                    },
                },
            }],
        } as any));

        const response: MockExpressResult = callMockExpressHandler(handler, {
            path: '/' + route,
            query: {
                [queryKey]: chance.string(),
            },
            method: 'get',
        });

        expect(response.status).to.be.equal(200);
        expect(typeof response.result[responseKey]).to.be.equal('string');
    });

    it('should be able to response with reject result', (): void => {

        const route: string = chance.word();
        const queryKey: string = chance.word();
        const responseKey: string = chance.word();

        const handler = createKunnHandler(Kunn.fromAny({
            version: 1,
            routes: [{
                path: '/' + route,
                protocol: PROTOCOL.GET,
                request: {
                    query: {
                        [queryKey]: {
                            type: TYPE.STRING,
                        },
                    },
                    response: {
                        [responseKey]: {
                            type: TYPE.STRING,
                        },
                    },
                },
            }],
        } as any));

        const response: MockExpressResult = callMockExpressHandler(handler, {
            path: '/' + route,
            query: {},
            method: 'get',
        });

        expect(response.status).to.be.equal(400);
        expect(response.result).to.be.deep.equal({});
    });
});
