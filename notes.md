class Checkout
    rules
    products
    cart
    total
    grossTotal
    appliedRules


cart = {
    [item]: {
        qty: number,
        total: qty * item.price
        gross: appliedRuleTotal
    }
}
cart = [{price, code, item}]

total = cart.reduce(sum, next =>  sum + next.price, 0);

grossTotal = appliedRulesCostSum


can I expose this as a hook? 

