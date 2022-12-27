const initialState = {
    phones: [],
    loading: true,
    error: null,
    cartItems: [


    ],
    orderTotal: 2000,
};

const updateCartItems = (cartItems, item, idx) => {
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
const updateCartItem = (phone, item = {}) => {

    const { title = phone.title, total = 0, id = phone.id, count = 0 } = item;
    return {
        title,
        total: total + phone.total,
        count: count + 1,
        id,
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
            const phoneId = action.payload;
            const phone = state.phones.find((elem) => elem.id === phoneId);
            const itemIndex = state.cartItems.findIndex((elem) => elem.id === phoneId)
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(phone, item)
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            }
        default:
            return state;
    }
}

export default reducer;