import React from 'react'
import PropTypes from 'prop-types'
import {Checkbox, Segment, Icon} from 'semantic-ui-react'
import '!style-loader!webpack-sass!./item.scss'

const Todo = ({ onClick, completed, text, removeClick}) => (
    <div className="todo-item">
        <Segment attached={true}>
            <Checkbox className={completed?"completed": ""} onClick={onClick} selected={completed} label={text} />
            <Icon name="close" className="close" onClick={removeClick}/>
        </Segment>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    removeClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}


export default Todo