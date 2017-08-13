import _ from 'lodash'
import {ipcRenderer} from 'electron'

import windowManager from 'electron-window-manager'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            ipcRenderer.send('content-changes', action)
            windowManager.sharedData.set('action',action)
            return _.concat(state, {
                id: action.id,
                text: action.text,
                completed: false
            });
        case 'REMOVE_TODO':
            ipcRenderer.send('content-changes', action)
            return state.filter(item=>(item.id!==action.id)); //no mutation!!!_.remove will mutate array
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? _.assign(todo, {completed: !todo.completed})
                    : todo
            )
        default:
            return state
    }
}

export default todos
