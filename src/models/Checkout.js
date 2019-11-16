class Checkout {
    constructor(initData) {
        let { pricingRules = [], products = [] } = initData;
        // this.cart = [];
        // this.internalCart = [];
        this.cart = {};
        this.products = [...products];
        this.pricingRules = [...pricingRules];
        this.appliedRules = {};
        this.undiscounted = 0;
        this.grossTotal = 0;

        this.scan = this.scan.bind(this);
        this.scanProduct = this.scanProduct.bind(this);
        this.remove = this.remove.bind(this);
        this.updateCheckout = this.updateCheckout.bind(this);
        this.total = this.total.bind(this);
    }
    scanProduct(product) {
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
        this.updateCheckout(this.cart);
    }

    scan(code = "") {
        let product = this.products.find(p => p.code === code);
        if (product) {
            this.scanProduct({ ...product });
        }
        return this;
    }
    remove(code = "") {
        let p = this.cart[code];
        if (p && p.qty > 0) {
            p.qty = p.qty - 1;
        }
        this.updateCheckout(this.cart);
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
        this.updateCheckout(this.cart);
    }

    updateCheckout(cart) {
        this.pricingRules.forEach(rule => {
            rule.applyDiscount(cart, this.appliedRules);
        });
        this.grossTotal = Object.keys({ ...cart }).reduce((sum, next) => cart[next] ? sum + cart[next].discounted : 0,0);
        this.undiscounted = Object.keys({ ...cart }).reduce((sum, next) => cart[next] ? sum + cart[next].undiscounted : 0,0)
        let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return clone;
    }
    total() {
        return this.grossTotal;
    }
}
export default Checkout;
