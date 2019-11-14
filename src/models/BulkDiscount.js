class BulkDiscount {
    constructor(code, quantity, discount, productList) {
        this.code = code;
        this.quantity = quantity;
        this.discount = discount;
        this.products = productList;
    }

    getOriginalProductPrice(code) {
        let product = this.products.find(item => item.code === code);
        return product.price;
    }

    applyDiscount(cart = []) {
        let clone = [...cart];
        let productsToCheck = clone.filter(p => p.code === this.code);
        if (productsToCheck.length >= this.quantity) {
            clone.forEach(p => {
                if (p.code === this.code) {
                    p.price = this.getOriginalProductPrice(p.code) - this.discount;
                }
            });
        }
    }
}
export default BulkDiscount;
