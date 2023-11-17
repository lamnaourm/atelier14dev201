import uuid from "react-uuid";
import * as types from './ActionsTypes'


const initial_state = {
    tasks: [
        {
            id: uuid(),
            task: "Reviser Javascript",
            completed: false
        },
        {
            id: uuid(),
            task: "Reviser Javas",
            completed: true
        },
        {
            id: uuid(),
            task: "Reviser Python",
            completed: false
        }
    ]
}

const TodoReducer = (state = initial_state, action) => {

    let newState = { ...state }

    switch (action.type) {
        case types.ADD_TACHE:
            newState.tasks = [...newState.tasks, { id: uuid(), task: action.payload, completed: false }]
            break;
        case types.DELETE_TACHE:
            newState.tasks = newState.tasks.filter(t => t.id != action.payload)
            break;
        case types.MODIF_TACHE:
            newState.tasks = newState.tasks.map(t => t.id == action.payload ? { ...t, completed: !t.completed } : t)
            break;
        case types.DELETE_ALL:
            newState.tasks = []
            break;
        case types.DELETE_TERM:
            newState.tasks = newState.tasks.filter(t => !t.completed)
            break;
        case types.DELETE_NOTERM:
            newState.tasks = newState.tasks.filter(t => t.completed)
            break;
    }
    return newState;
}

export default TodoReducer