import React from "react";
import './phone-list-item';
const PhoneListItem = ({ phone }) => {
    const { title, discription, price, coverImage } = phone;
    return (
        <div className="phone-list-item">
            <div className="phone-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="phone-details">
                <a href="#" className="phone-title">{title}</a>
                <div className="phone-author">{discription}</div>
                <div className="phone-price">${price}</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>

        </div>
    );
}

export default PhoneListItem;