var React = require('react/addons');
var GroceryItem = require('./groceryItem.jsx');
var GroceryAddItem = require('./groceryAddItem.jsx')

var GroceryList = React.createClass({
    render: function () {
        return (
            <div className='container'>
                <h2> Grocery List </h2>

                <div className='well'>
                    {this.props.items.map(function (item, index) {
                        return (
                            <div>
                                <GroceryItem item={item} key={'item'+index}/>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <GroceryAddItem/>
                </div>

            </div>
        )
    }
});

module.exports = GroceryList;