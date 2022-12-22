import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
    state = {
        isError: false
    }
    componentDidCatch() {
        this.setState({ isError: true })
    }

    render() {
        if (this.state.isError = true) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}