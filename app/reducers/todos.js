import _ from 'lodash'
import {ipcRenderer} from 'electron'

const todos = (state = [], action) => {
    let newState
    switch (action.type) {
        case 'ADD_TODO':
            newState = _.concat(state, {
                id: action.id,
                text: action.text,
                completed: false
            })
            ipcRenderer.send('content-changes', newState)
            return newState;
        case 'REMOVE_TODO':
            newState = state.filter(item=>(item.id!==action.id)); //no mutation!!!_.remove will mutate array
            ipcRenderer.send('content-changes', newState)
            return newState
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? _.assign(todo, {completed: !todo.completed})
                    : todo
            )
        case 'REFRESH_TODOS':
            return action.todos
        default:
            return state
    }
}

export default todos
