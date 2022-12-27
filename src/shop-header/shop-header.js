import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const ShopHeader = ({ total, countItems, orderTotal }) => {
    return (
        <header className="shop-header row">
            <Link to='/'>
                <span className="logo text-dark" href="#">ReStore</span>
            </Link>
            <Link to='/cart'>
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {countItems} items (${total})
                </div>
            </Link>
        </header>
    );
};
const mapStateToProps = ({ countItems, orderTotal }) => {
    return {
        countItems: countItems,
        total: orderTotal,
    }
}

export default connect(mapStateToProps)(ShopHeader);