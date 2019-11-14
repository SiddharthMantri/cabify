// import { products } from "./products";

class Checkout {
    constructor(initData) {
        let { pricingRules = [], products = [] } = initData;
        this.cart = [];
        this.internalCart = [];
        this.products = [...products];
        this.pricingRules = [...pricingRules];
        this.appliedRules = [];
        this.undiscounted = 0;
        this.grossTotal = 0;

        this.scan = this.scan.bind(this);
        this.scanItem = this.scanItem.bind(this);
        this.remove = this.remove.bind(this);
        this.updateCheckout = this.updateCheckout.bind(this);
        this.total = this.total.bind(this);
    }
    scanItem(product) {
        this.cart.push({ ...product });
        this.internalCart.push({ ...product });
        this.updateCheckout(this.cart);
    }

    scan(code = "") {
        let product = this.products.find(p => p.code === code);
        if (product) {
            this.scanItem({ ...product });
        }
        return this;
    }
    remove(code = "") {
        let p = this.cart.findIndex(product => product.code === code);
        if (p > -1) {
            this.cart.splice(p, 1);
        }
        return this;
    }
    addByQuantity(code, qty) {
        let p = this.products.find(p => p.code === code);
        let subCart = Array.of(qty).fill({ ...p });
        let newCart = [...this.cart, ...subCart];
    }

    updateCheckout(cart) {
        this.pricingRules.forEach(rule => {
            rule.applyDiscount(cart);
        });
        this.grossTotal = cart.reduce((sum, next) => sum + next.price, 0);
        this.undiscounted = this.internalCart.reduce(
            (sum, next) => sum + next.price,
            0
        );
        let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return clone;
    }
    total() {
        return this.grossTotal;
    }
}
export default Checkout;
