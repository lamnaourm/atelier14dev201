import * as types from './ActionsTypes'

export const addtask = (text) => {
    return {
        type:types.ADD_TACHE,
        payload: text
    }
}