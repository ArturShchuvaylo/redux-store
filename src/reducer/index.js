const initialState = {
    phones: [],
    loading: true,
    error: null,
    cartItems: [
    ],
    orderTotal: 0,
    countItems: 0,
};

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1),
        ]


    }
    if (idx === -1) {
        return [
            ...cartItems,
            item,
        ]

    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ]




}
const updateCartItem = (phone, item = {}, quantity) => {

    const { title = phone.title, total = 0, id = phone.id, count = 0 } = item;
    return {
        title,
        total: total + phone.total * quantity,
        count: count + quantity,
        id,
    }
}

const updateOrder = (state, phoneId, quantity) => {
    const { phones, cartItems } = state;
    const phone = phones.find((elem) => elem.id === phoneId);
    const itemIndex = cartItems.findIndex((elem) => elem.id === phoneId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(phone, item, quantity)
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        countItems: state.countItems + quantity,
        orderTotal: state.orderTotal + phone.total * quantity,
    }

}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PHONES_LOADED':
            return {
                ...state,
                phones: action.payload,
                loading: false,
                error: null,
            }
        case 'PHONES_REQUESTED':
            return {
                ...state,
                phones: [],
                loading: true,
                error: null,
            }
        case 'PHONES_ERROR':
            return {
                ...state,
                phones: [],
                loading: false,
                error: action.payload,
            }
        case "PHONE_ADD_TO_CART":
            return updateOrder(state, action.payload, +1);

        case "PHONE_REMOVE_FROM_CART":
            return updateOrder(state, action.payload, -1);
        case "PHONE_DELETE_ALL_CART":
            const item = state.cartItems.find(({ id }) => id === action.payload)
            return updateOrder(state, action.payload, -item.count);



        default:
            return state;
    }
}

export default reducer;