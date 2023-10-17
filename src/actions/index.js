const phonesLoaded = (newPhones) => {
    return {
        type: 'PHONES_LOADED',
        payload: newPhones,
    }
}
const phonesRequested = () => {
    return {
        type: "PHONES_REQUESTED",
    }
}
const phonesError = (error) => {
    return {
        type: "PHONES_ERROR",
        payload: error
    }
}

const phoneAddToCart = (id) => {
    return {
        type: "PHONE_ADD_TO_CART",
        payload: id,
    }
}
const phoneRemoveFromCart = (id) => {
    return {
        type: "PHONE_REMOVE_FROM_CART",
        payload: id,
    }
}
const phoneDeleteAllCart = (id) => {
    return {
        type: "PHONE_DELETE_ALL_CART",
        payload: id,
    }
}
const sum = (n) => {
    return {
        type: 'SUM',
        payload: n,
    }
}
const getValue = (e) => {
    return {
        type: 'GET_VALUE',
        payload: e,
    }
}

const fetchPhones = (dispatch, phonesStoreService) => () => {
    dispatch(phonesRequested());
    phonesStoreService.getPhones()
        .then((data) => {
            dispatch(phonesLoaded(data))
        })
        .catch((error) => {
            dispatch(phonesError(error))
        })
}

export {
    fetchPhones,
    phoneAddToCart,
    phoneRemoveFromCart,
    phoneDeleteAllCart,
    sum,
    getValue
}