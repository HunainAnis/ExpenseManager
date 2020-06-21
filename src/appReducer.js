import { ADD_TRANSACTION } from "./appActions"
import { DELETE_TRANSACION } from "./appActions"

export default (state, action) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions:state.transactions.concat(action.values)
            }
            case DELETE_TRANSACION:
                return {
                    ...state,
                    transactions:state.transactions.filter(item=> item.id !== action.id)
                }
        default:
            return state
    }
}