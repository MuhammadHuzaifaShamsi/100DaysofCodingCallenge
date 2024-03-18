function order_sandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    } else {
        console.log("Items on the sandwich: " + items.join(", "));
    }
}



order_sandwich("Mustard", "Cheese", "Lettuce");
order_sandwich("Meat", "Tomato");
order_sandwich("Chicken");