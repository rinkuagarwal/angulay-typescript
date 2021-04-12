let orders = [];
class Order {
    id: String;
    itemName: String;
    price: number;
    address: String;
    pincode: number;
    public orders() {
        // let orders = [];
        for (let i = 0; i < 10; i++) {
            let order = {
                id: i * 10 + 1,
                itemName: 'item' + i,
                price: (i * 23) + 15,
                address: 'main' + i,
                pincode: 23456*i
            }
            orders.push(order);
        } console.log(orders);
    }
}
        const o1: Order= new Order();
o1.orders();


let sortedOrders=orders.sort(function(order1, order2){
    return order2.price-order1.price;
})
console.log(sortedOrders);