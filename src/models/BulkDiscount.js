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

    applyDiscount(cart = {}, appliedRules = {}) {
        let clone = {...cart};
        let productsToCheck = clone[this.code];

        if (productsToCheck && productsToCheck.qty >= this.quantity) {
            let discountedAmount = (productsToCheck.qty * this.discount);
            let originalPrice = (productsToCheck.product.price * productsToCheck.qty);
            let discount = originalPrice - discountedAmount;
            clone[this.code].discounted = discount;
            clone[this.code].undiscounted = originalPrice;
            appliedRules[this.code] = {
                discount: discount
            }
        }
    }
}
export default BulkDiscount;
