import BulkDiscount from "../models/BulkDiscount";
import FreeDiscount from "../models/FreeDiscount";
import { products } from "../models/products";

const bulkRule = new BulkDiscount("TSHIRT", 3, 1, products);
const twoRule = new FreeDiscount("CAP", 2);

export const setup = {
    pricingRules: [bulkRule, twoRule],
    products
}