import React from "react";
import "./shopping-cart-table.css";
import { connect } from "react-redux";

import {
  phoneAddToCart,
  phoneRemoveFromCart,
  phoneDeleteAllCart,
} from "../actions";

const ShoppingCartTable = ({
  items,
  orderTotal,
  onIncrease,
  onDecrease,
  onDelete,
  sum,
  value,
}) => {
  const renderRow = (item, idx) => {
    const { title, total, count, id } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <div className="shopping-cart-table">
        <h2>Your Order</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>

          <tbody>{items.map(renderRow)}</tbody>
        </table>

        <div className="total">{`  Total:${orderTotal}$`}</div>
      </div>
      <div>{value}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    orderTotal: state.orderTotal,
    sum: state.sum,
    value: state.value,
  };
};

const mapDispatchToProps = {
  onIncrease: phoneAddToCart,
  onDecrease: phoneRemoveFromCart,
  onDelete: phoneDeleteAllCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
