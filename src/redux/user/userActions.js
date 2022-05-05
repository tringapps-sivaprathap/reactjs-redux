import { SET_USER } from './userTypes'

export const setUser = (name) => {
    return {
        type: SET_USER,
        info: name
    }
}