import React from "react";
import './phone-list-item.css';
import { Link } from 'react-router-dom'

const PhoneListItem = ({ phone, plusOneItem }) => {
    const { title, discription, total, imagUrl } = phone;
    return (
        <div className="phone-list-item">
            <div className="phone-cover">
                <img src={imagUrl} alt="cover" />
            </div>
            <div className="phone-details">
                <Link to="/" className="phone-title">{title}</Link>
                <div className="phone-author">{discription}</div>
                <div className="phone-price">${total}</div>
                <button onClick={plusOneItem} className="btn btn-info add-to-cart">Add to cart</button>
            </div>

        </div>
    );
}

export default PhoneListItem;