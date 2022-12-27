import React, { Component } from "react";
import PhoneListItem from "../phone-list-item";
import withPhonesStoreService from "../hoc";
import { fetchPhones, phoneAddToCart } from "../../actions";
import { connect } from "react-redux";
import Spiner from "../spiner/spiner"
import ErrorIndicator from "../error-indicator/error-indicator";

import './phone-list.css'

const PhoneList = ({ phones, phoneAddToCart }) => {
    return (
        <ul className="phone-list">
            {
                phones.map(phone => {
                    return (
                        <li key={phone.id}>
                            <PhoneListItem phone={phone} plusOneItem={() => phoneAddToCart(phone.id)
                            } />
                        </li>
                    )
                })
            }
        </ul>
    )
}

class PhoneListContainer extends Component {

    componentDidMount() {
        this.props.fetchPhones();
    }

    render() {
        const { phones, loading, error, onAddToCart } = this.props;

        if (loading) {
            return <Spiner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <PhoneList phones={phones} phoneAddToCart={onAddToCart} />
    }
}

const mapStateToProps = (state) => {
    return {
        phones: state.phones,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = (dispatch, { phonesStoreService }) => {
    return {
        fetchPhones: fetchPhones(dispatch, phonesStoreService),
        onAddToCart: (id) => dispatch(phoneAddToCart(id)),
    }
}



export default withPhonesStoreService()(connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer));