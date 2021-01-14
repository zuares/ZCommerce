import { Actions } from './Actions'

function reducers(state, action) {
    switch (action.type) {
        case Actions.Notify:
            return {
                ...state,
                notify: action.payload
            }

        default:
            return state
    }
}

export default reducers;