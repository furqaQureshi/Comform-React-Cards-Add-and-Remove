export const depositMoney = (obj) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: obj
        });
    }
}
export const withdrawMoney = (obj) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: obj
        });
    }
}