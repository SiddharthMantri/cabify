class FreeDiscount {
	constructor(code, quantity) {
		this.code = code;
		this.quantity = quantity;
	}

	applyDiscount(cart = {}, appliedRules = {}) {
		let clone = { ...cart };
		let productsToCheck = clone[this.code];
		if (productsToCheck && productsToCheck.qty >= this.quantity) {
			let { qty } = productsToCheck;
			let { product } = productsToCheck;
			let discounted = 0;
			let undiscounted = product.price * qty;
			let numFree = 0;
			for (let i = this.quantity; i < qty; i = this.quantity + 1) {
				numFree += 1;
			}
			if (numFree >= 1) {
				discounted = undiscounted - (product.price * numFree);
				cart[this.code].discounted = discounted;
				appliedRules[`${this.quantity}x1 Free offer`] = {
					discount: discounted
				}
			}else{
				cart[this.code].discounted = undiscounted;
			}
			cart[this.code].undiscounted = undiscounted;
		}

	}
}
export default FreeDiscount;
