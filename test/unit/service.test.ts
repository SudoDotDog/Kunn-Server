/**
 * @author WMXPY
 * @namespace Server
 * @description Service
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";

describe('Given placeholder', (): void => {

    const chance: Chance.Chance = new Chance('placeholder');

    it('placeholder', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
