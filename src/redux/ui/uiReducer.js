const initialState = {
    chekoutMsg: false
}

const uiSwitch = (state = initialState, action) => {
    switch(action.type) {

        case "ui/setCheckoutMsg":
            return {
                ...state,
                chekoutMsg: !state.chekoutMsg
            }

        default:
            return state

    }
}

export default uiSwitch