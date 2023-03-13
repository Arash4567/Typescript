// const test = "Hello";
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price, "$."));
};
showProduct("Apple", 399);
var product = getProduct(1);
showProduct(product.name, product.price);
var names = ["John", "Jane", "Peter", "David", "Mary"];
console.log(names.join(", "));
var big = 9007199254740991n;
console.log(big);
var pending;
pending = true;
console.log(pending);
