import _ from 'lodash'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('reducer todo', action)
            return _.concat(state, {
                id: action.id,
                text: action.text,
                completed: false
            });
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
