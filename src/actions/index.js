const phonesLoaded = (newPhones) => {
    return {
        type: 'PHONES_LOADED',
        payload: newPhones,
    }
}

export {
    phonesLoaded,
}