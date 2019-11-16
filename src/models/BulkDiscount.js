class BulkDiscount {
    constructor(code, quantity, discount, productList) {
        this.code = code;
        this.quantity = quantity;
        this.discount = discount;
        this.products = productList;
        this.name = `x${this.quantity} ${this.code} Offer`;
    }

    getOriginalProductPrice(code) {
        let product = this.products.find(item => item.code === code);
        return product.price;
    }

    applyDiscount(cart = {}, appliedRules = {}) {
        let clone = { ...cart };
        let productsToCheck = clone[this.code];
        if (productsToCheck) {
            let originalPrice = productsToCheck.product.price * productsToCheck.qty;
            let discount = productsToCheck.product.price * productsToCheck.qty;
            if (productsToCheck && productsToCheck.qty >= this.quantity) {
                let discountedAmount = productsToCheck.qty * this.discount;
                discount = originalPrice - discountedAmount;
                appliedRules[this.name] = {
                    discount: discount,
                    savings: originalPrice - discount
                };
            }else if(productsToCheck && productsToCheck.qty < this.quantity){
                delete appliedRules[this.name];
            }
            clone[this.code].discounted = discount;
            clone[this.code].undiscounted = originalPrice;
        }
    }
}
export default BulkDiscount;
