var React = require('react/addons');
var action = require('./../../actions/GroceryItemActionCreator.js');

var GroceryAddItem = React.createClass({
    getInitialState: function () {
        return {item: ''};
    },
    handleInputName: function (e) {
        this.setState({
            itemName: e.target.value
        });
    },
    handleInputPurchased: function (e) {
        this.setState({
            itemPurchased: e.target.value
        });
    },
    handleSumbit: function (e) {
        e.preventDefault();
        action.add({
            name: this.state.itemName,
            isPurchased: this.state.itemPurchased
        });

        this.setState({
            itemName: '',
            itemPurchased: ''
        });
    },
    render: function () {
        return (
            <div className='well'>
                <form onSubmit={this.handleSumbit} className='form-horizontal'>
                    <fieldset>
                        <legend>Add New Grocery Item</legend>

                        <div className='form-group'>
                            <label htmlFor='itemName' className='col-lg-2 control-label'>Item Name</label>

                            <div className='col-md-10'>
                                <input className='form-control' id='itemName' type='text' value={this.state.itemName}
                                       onChange={this.handleInputName}/>
                            </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='itemPur' className='col-lg-2 control-label'>Item Purchased</label>

                            <div className='col-md-10'>
                                <input className='form-control' id='itemPur' type='text'
                                       value={this.state.itemPurchased}
                                       onChange={this.handleInputPurchased}/>
                            </div>

                            <br/>
                            <br/>
                            <br/>

                            <div className='form-group col-md-12'>
                                <button className='btn btn-md btn-primary pull-right'>Add Item</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
});

module.exports = GroceryAddItem;
