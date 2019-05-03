/**
 * @author WMXPY
 * @description Mock
 * @description Express
 */

import { Request } from "express";

export type MockExpressResult = {
    status: number;
    result: any;
};

export const callMockExpressHandler = (handler: any, req: Partial<Request>): MockExpressResult => {

    let status: number = 200;
    let result: any = null;

    const res: any = {
        status: (code: number) => {
            status = code;
            return res;
        },
        send: (value: any) => {
            result = value;
            return res;
        },
    };

    handler(req, res, () => void 0);

    return {
        status,
        result,
    };
};
