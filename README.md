# Cabify Coding Challenge

#### Technologies Used

The main libraries powering the UI:
  - React - 16.11.0

Initially, I thought about adding redux but felt that writing my own provider and hooks into Checkout would be much simpler given the size of the project.

### Installation

One way to run this locally would be to clone this application using git and then running it with npm
The project requires - Node v10.16 for it to run locally.

```sh
$ git clone https://github.com/SiddharthMantri/cabify.git
$ cd cabify
$ npm install
$ npm start
```
This will open a browser at localhost:3000/

### ReactJS
I decided to use React given that the exiting markup for the page was easily decomposable into its components and React best supports the declarative way of writing HTML using JSX. 

### File Structure
The `src` folder is composed of 4 main parts of the app - Components, Hooks, Models and State. 

- components - contains the main components of the UI markup. 
- hooks - contains two custom hooks that hook onto the app state and are used in the state provider.
- models - contains the various view models that are used for the UI.
- state - contains the provider and context that use the hooks to provide data throughout the component tree.

The src folder also contains `__tests__` which contain some simple tests to make sure the app is working as intended. 

### Requisites completed

- Have a Checkout class, that can be instantiated with products and discounts available. Allow adding products to the checkout with the scan method, passing the product ID as string in his first argument. Allow calculating the total price with the total method, which won't accept any arguments and will return the total price (discount already applied) as number
  - Checkout.js can be instantiated with pricingRules and products
  - This has been demonstrated in the `__tests__` folder under checkout.test.js


### Development choices

- I have specifically not re-written any of the html provided in the oiriginal problem.
- In the interest of time, I have broken the existing code into its components instead of rewriting from scratch.
- I have not rewritten the css either. I have added some classes that are used by the app but haven't done anything special otherwise.
- `Modular CSS` was an option that I considered but I have discarded it in interest of time and reduction of complexity. That being said, if the project was sufficiently large, I'd have broken the CSS into modules and used them only in the components required. 
- Used a simple Eslint configuration for code linting that has helped me in the past. I considered various style guides and settled on `babel-eslint` although I could've used `airbnb-base` as well. 
- Specifically not used `redux` or `react-redux` in this application. I feel that by writing my own state hooks and provider, i've reduced the size of the application compared to if I'd have used `redux`.
- Stuck to jest as a testing library. I would have liked to use an integration testing suite such as cypress as well. 
- Limited item quantity to 999. Replicating something i've seen in online stores that will prevent people from ordering unnaturally large amounts of an item.



### Future improvements
- I would not implement business logic on the front end. If this was a full stack challenge, I would have implemented a simple server that has the Checkout APIs that would be consumed by the UI.


### Codesandbox

I used Codesandbox to test the initial implementation of hooks - https://codesandbox.io/s/elastic-hofstaedter-2qtde and https://codesandbox.io/s/laughing-monad-3gtxx