export const addUser = (value) => ({
    type: 'ADD_USER',
    payload: value
})

export const addAge = (value) => ({
    type: 'ADD_AGE',
    payload: value
})

export const addAddress = (value) => ({
    type: 'ADD_ADDRESS',
    payload: value
})

export const getUser = (name, age, adress) => {
    return async (dispatch, getStore) => {
        dispatch(addUser(name))
        dispatch(addAge(age))
        dispatch(addAddress(adress))
    }
}