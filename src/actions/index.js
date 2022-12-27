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
    phoneAddToCart
}