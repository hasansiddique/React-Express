var React = require('react/addons');
var action = require('./../../actions/GroceryItemActionCreator.js');

var GroceryItem = React.createClass({
    handleDelete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
    handlePurchased: function (e) {
        e.preventDefault();
        if (this.props.item.isPurchased) {
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },
    render: function () {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col-md-8'>
                        <h4 className={this.props.item.isPurchased ? 'is-purchased' : ''}>
                            {this.props.item.name}
                        </h4>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-md btn-danger' onClick={this.handleDelete}>
                            <span className='glyphicon glyphicon-remove delete-item'></span>
                        </button>
                    </div>
                    <div className='col-md-2'>
                        <button
                            className={this.props.item.isPurchased ? 'btn btn-md btn-success' : 'btn btn-md btn-info'}
                            onClick={this.handlePurchased}>
                            <span
                                className={this.props.item.isPurchased ? 'glyphicon glyphicon-transfer' : 'glyphicon glyphicon-shopping-cart'}></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = GroceryItem;