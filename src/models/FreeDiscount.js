class FreeDiscount {
	constructor(code, quantity) {
		this.code = code;
		this.quantity = quantity;
		this.name = `${this.quantity}x1 Free`;
	}

	applyDiscount(cart = {}, appliedRules) {
		let clone = { ...cart };
		let productsToCheck = clone[this.code];
		let discounted = 0;
		let price =
			productsToCheck && productsToCheck.product
				? productsToCheck.product.price
				: 0;
		let undiscounted = productsToCheck ? price * productsToCheck.qty : 0;
		let numDiscounted = 0;
		let qty = productsToCheck ? productsToCheck.qty : 0;
		if (productsToCheck && qty > this.quantity) {
			for (let i = this.quantity; i < qty; i = i + this.quantity + 1) {
				numDiscounted += 1;
			}
		}
		discounted = undiscounted - price * numDiscounted;
		if (productsToCheck && qty > this.quantity) {
			productsToCheck.undiscounted = undiscounted;
			productsToCheck.discounted = discounted;
			let savings = undiscounted - discounted;
			appliedRules[this.name] = {
				undiscounted,
				discounted,
				savings
			};
		}else if(productsToCheck && qty <= this.quantity){
			delete appliedRules[this.name];
		}
	}
}
export default FreeDiscount;
