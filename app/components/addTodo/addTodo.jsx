import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import {Form, Input} from 'semantic-ui-react'

// import {ipcRenderer} from 'electron'

import '!style-loader!webpack-sass!./addTodo.scss'

import {ipcRenderer} from 'electron'


let AddTodo = ({ dispatch }) => {
    let input
    ipcRenderer.on('add-todo', (event, msg)=>{
        dispatch(addTodo(msg));
    })
    return (
        <div className="addTodo">
            <Form onSubmit={e => {
                e.preventDefault();
                if (!input.inputRef.value.trim()) {
                    return
                }
                dispatch(addTodo(input.inputRef.value));
                input.inputRef.value = ''
            }

            }>
                <Input className="input" ref={node => {
                    input = node
                }}
                       icon='chevron down' iconPosition='left'
                       placeholder='What needs to be done?'/>
            </Form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
