class TwoForOneDiscount {
	constructor(code, quantity) {
		this.code = code;
		this.quantity = quantity;
	}

	applyDiscount(products = []) {
		let clone = [...products];
		let productsToCheck = clone.filter(p => p.code === this.code);

		if (productsToCheck.length > this.quantity) {
			for (
				let i = this.quantity;
				i < productsToCheck.length;
				i = i + this.quantity + 1
			) {
				productsToCheck[i].price = 0;
			}
		}
	}
}
export default TwoForOneDiscount;
