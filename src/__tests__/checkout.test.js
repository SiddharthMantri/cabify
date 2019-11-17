import { setup } from "../store/setup";
import Checkout from "../models/Checkout";

describe("Tests checkout functionality", () => {
    const co = new Checkout(setup);
    co.scan('X7R2OPX').scan('X7R2OPX').scan('X7R2OPX');

    it('Calculated total correctly', () => {
        expect(co.total()).toBe(57);
    });
    it("Calculates correct number of applied rules", () => {
        co.scan('X2G2OPZ').scan('X2G2OPZ');
        expect(Object.keys(co.appliedRules).length).toBe(1);
    });
    it('Calculates correct quantity in cart', () => {
        co.scan('X2G2OPZ').scan('X2G2OPZ');
        expect(co.cartQty).toBe(7);
    });

})
