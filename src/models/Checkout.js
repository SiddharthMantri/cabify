class Checkout {
    constructor(initData) {
        let { pricingRules = [], products = [] } = initData;
        // this.cart = [];
        // this.internalCart = [];
        this.cart = {};
        this.internalCart = {};
        this.products = [...products];
        this.pricingRules = [...pricingRules];
        this.appliedRules = {};
        this.undiscounted = 0;
        this.grossTotal = 0;

        this.scan = this.scan.bind(this);
        this.scanItem = this.scanItem.bind(this);
        this.remove = this.remove.bind(this);
        this.updateCheckout = this.updateCheckout.bind(this);
        this.total = this.total.bind(this);
    }
    scanItem(product) {
        if (this.cart[product.code]) {
            this.cart[product.code].qty += 1;
            this.cart[product.code].undiscounted =
                product.price * this.cart[product.code].qty;
        } else {
            this.cart[product.code] = {
                product: { ...product },
                qty: 1,
                undiscounted: product.price * 1
            };
        }
        if (this.internalCart[product.code]) {
            this.internalCart[product.code].qty += 1;
        } else {
            this.internalCart[product.code] = {
                product: { ...product },
                qty: 1
            };
        }
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
        let intQty = parseInt(qty);
        let product = this.products.find(p => p.code === code);
        if (this.cart[code]) {
            this.cart[code].qty = intQty;
            this.cart[code].undiscounted = product.price * intQty;
        } else {
            this.cart[code] = {
                product: { ...product },
                qty: qty,
                undiscounted: product.price * intQty
            };
        }
        if (this.internalCart[code]) {
            this.internalCart[code].qty = qty;
        } else {
            this.internalCart[code] = {
                product: { ...product },
                qty: qty,
                undiscounted: product.price * intQty
            };
        }
        this.updateCheckout(this.cart);
    }

    updateCheckout(cart) {
        this.pricingRules.forEach(rule => {
            rule.applyDiscount(cart, this.appliedRules);
        });
        this.grossTotal = Object.keys({ ...cart }).reduce(
            (sum, next) => sum + cart[next].discounted,
            0
        );
        this.undiscounted = Object.keys({ ...cart }).reduce(
            (sum, next) => sum + cart[next].undiscounted,
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
