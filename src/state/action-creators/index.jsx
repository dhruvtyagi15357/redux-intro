export const deposit = (amt) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amt
        })
    }
};


export const withdraw = (amt) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amt
        })
    }
};