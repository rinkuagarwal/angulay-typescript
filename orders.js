var orders = [];
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.orders = function () {
        // let orders = [];
        for (var i = 0; i < 10; i++) {
            var order = {
                id: i * 10 + 1,
                itemName: 'item' + i,
                price: (i * 23) + 15,
                address: 'main' + i,
                pincode: 23456 * i
            };
            orders.push(order);
        }
        console.log(orders);
    };
    return Order;
}());
var o1 = new Order();
o1.orders();
var sortedOrders = orders.sort(function (order1, order2) {
    return order2.price - order1.price;
});
console.log(sortedOrders);
