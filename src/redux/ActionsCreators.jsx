import * as types from './ActionsTypes'

export const addtask = (text) => {
    return {
        type:types.ADD_TACHE,
        payload: text
    }
}

export const deletetask = (id) => {
    return {
        type:types.DELETE_TACHE,
        payload: id
    }
}

export const modiftask = (id) => {
    return {
        type:types.MODIF_TACHE,
        payload: id
    }
}

export const deleteAll = () =>{
    return {
        type:types.DELETE_ALL
    }
}

export const deletetermine = () =>{
    return {
        type:types.DELETE_TERM
    }
}

export const deleteNotermin = () =>{
    return {
        type:types.DELETE_NOTERM
    }
}