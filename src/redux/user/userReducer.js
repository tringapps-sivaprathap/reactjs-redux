import { SET_USER } from './userTypes'

const initialState = {
    userName: 'Sivaprathap',
    item1: "home",
    item2: "projects",
    item3: "channel"
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