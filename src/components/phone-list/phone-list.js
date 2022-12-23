import React, { Component } from "react";
import PhoneListItem from "../phone-list-item";
import withPhonesStoreService from "../hoc";
import { phonesLoaded } from "../../actions";
import { connect } from "react-redux";

import './phone-list.css'

class PhoneList extends Component {

    componentDidMount() {
        const { phonesStoreService } = this.props;
        const data = phonesStoreService.getPhones();


        this.props.phonesLoaded(data)
    }


    render() {
        const { phones } = this.props;


        return (
            <ul className="phone-list">
                {
                    phones.map(phone => {
                        return (
                            <li key={phone.id}>
                                <PhoneListItem phone={phone} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phones: state.phones,
    }
}

const mapDispatchToProps = {
    phonesLoaded
}



export default withPhonesStoreService()(connect(mapStateToProps, mapDispatchToProps)(PhoneList));