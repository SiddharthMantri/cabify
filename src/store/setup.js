import BulkDiscount from "../models/BulkDiscount";
import FreeDiscount from "../models/FreeDiscount";
import { products } from "../models/products";

const bulkRule = new BulkDiscount("X7R2OPX", 3, 1, products);
const twoRule = new FreeDiscount("X3W2OPY", 2);

export const setup = {
    pricingRules: [bulkRule, twoRule],
    products
}