var React = require('react/addons');

var GroceryList = require('./components/groceryComponent/groceryItemsList.jsx');
var groceryItemStore = require('./stores/groceryItemStore.jsx');

var initial = groceryItemStore.getItems();

function render() {
    React.render(<GroceryList items={initial}/>, app);
}

groceryItemStore.onChange(function (items) {
    initial = items
    render();
});

render();
