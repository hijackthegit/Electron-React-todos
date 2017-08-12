import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../../actions'
import PropTypes from 'prop-types'
import Todo from '../item/item'
import {ipcRenderer} from 'electron'

const TodoList = ({ todos, onTodoClick, onRemoveClick }) => {
    ipcRenderer.on('remove-todo', (event, msg)=>{
        onRemoveClick(msg.id);
    })
    return (<div className="todo-list">
        {


            todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                    removeClick={() => onRemoveClick(todo.id)}
                />
            )}
    </div>)
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
    onTodoClick: toggleTodo,
    onRemoveClick: removeTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList