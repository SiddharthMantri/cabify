class Product {
    constructor(code, name, price) {
      this.code = code;
      this.name = name;
      this.price = price;
    }
  }
  export const products = [
    new Product("CAP", "Cabify Cap", 5.0),
    new Product("TSHIRT", "Cabify T-Shirt", 20.0),
    new Product("MUG", "Cabify Coffee Mug", 7.5)
  ];
  