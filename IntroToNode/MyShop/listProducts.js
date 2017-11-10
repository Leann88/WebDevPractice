var faker = require("faker");

var items = [];

getItems();

function getItems() {
   // body...
   for(var i = 0; i < 10; i ++) {
        var randomProductName = faker.commerce.productName();
        var randomPrice = faker.commerce.price();

        var item = {"name": randomProductName, "price": randomPrice};
        items.push(item);
    }
    console.log("===================");
    console.log("WELCOME TO MY SHOP");
    console.log("===================");
    items.forEach(function(item){
        console.log(`${item["name"]} - $ ${item["price"]}`);
    });
}

