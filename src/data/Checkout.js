import { products } from "./products";

class Checkout {
    constructor(pricingRules = []) {
        this.pricingRules = pricingRules;
        this.cart = [];
        this.products = products;


        this.total = 0;
        this.grossTotal = 0;
        this.appliedDiscounts = [];
    }
    scan(code) {
        let p = this.products.find(p => p.code === code);
        if (p) {
            let cloned = { ...p };
            this.cart.push(cloned);
        }
        return this;
    }



    total() {
        return this.total;
    }
}
export default Checkout;