import { Actions } from './Actions'

function reducers(state, action) {
    switch (action.type) {
        case Actions.Notify:
            return {
                ...state,
                notify: action.payload
            }
        case Actions.Auth:
            return {
                ...state,
                auth: action.payload
            }
        case Actions.Cart:
            return {
                ...state,
                cart: action.payload
            }

        default:
            return state
    }
}

export default reducers;