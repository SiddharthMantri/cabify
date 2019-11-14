import BulkDiscount from "../models/BulkDiscount";
import TwoForOneDiscount from "../models/TwoForOneDiscount";
import { products } from "../models/products";

const bulkRule = new BulkDiscount("TSHIRT", 3, 1, products);
const twoRule = new TwoForOneDiscount("CAP", 2);

export const setup = {
    pricingRules: [bulkRule, twoRule],
    products
}