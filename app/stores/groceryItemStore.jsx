var dispatcher = require('./../dispatcher.js');

function groceryItemStore() {
    var items = [
        {
            name: 'Coconut',
            isPurchased: false
        },
        {
            name: 'Biscuit',
            isPurchased: false
        },
        {
            name: 'Juice',
            isPurchased: true
        },
        {
            name: 'Coke',
            isPurchased: false
        }
    ];
    var listeners = [];

    function getItems() {
        return items;
    }

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function deleteGroceryItem(item) {
        var index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
            triggerListeners();
        }
    }

    function togglePurchasedItem(item, status) {
        item.isPurchased = status || false;
        triggerListeners();
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(items);
        })
    }

    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if (split[0] === 'grocery-item') {
            switch (split[1]) {
                case 'add':
                    addGroceryItem(event.payload);
                    break;
                case 'delete':
                    deleteGroceryItem(event.payload);
                    break;
                case 'buy':
                    togglePurchasedItem(event.payload, true);
                    break;
                case 'unbuy':
                    togglePurchasedItem(event.payload, false);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    }
}

module.exports = new groceryItemStore();
