import { useState, useMemo, useCallback, useEffect } from "react";
import { products } from "../data/products";

export const useCheckout = (pricingRules = []) => {
  const rules = useMemo(() => pricingRules, []);
  const productList = useMemo(() => products, []);

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const [grossTotal, setGrossTotal] = useState(0);

  const [discounts, setDiscounts] = useState([]);

  const scan = useCallback(
    code => {
      let p = productList.filter(p => p.code === code);
      let clone = Object.assign(
        Object.create(Object.getPrototypeOf(p[0])),
        p[0]
      );
      let newCart = [...cart, clone];
      setCart(newCart);
    },
    [cart]
  );

  const reset = () => {
    setCart([]);
    setTotal(0);
  };

  useEffect(() => {
    rules.forEach(rule => rule.applyDiscount(cart));
    let newTotal = [...cart].reduce((sum, next) => sum + next.price, 0.0);
    setTotal(newTotal);
  }, [cart]);

  return [cart, scan, total, reset];
};
