import { SET_USER } from './userTypes'

const initialState = {
    userName: 'Sivaprathap'
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: return {
            ...state,
            userName: action.info
        }

        default: return state
    }
}

export default userReducer