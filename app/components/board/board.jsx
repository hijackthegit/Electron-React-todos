import React from 'react'
import reducer from '../../reducers/index'
import {Segment} from 'semantic-ui-react'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

//components
import AddTodo from '../addTodo/addTodo'
import TodoList from '../todolist/todolist'
import InfoBar from '../info-bar/info-bar'


const todoStore = createStore(reducer);

import '!style-loader!webpack-sass!./board.scss'


class Board extends React.Component {
    render() {
        return (
            <Provider store={todoStore}>
                <div className="board">
                    <Segment stacked={true} raised={true}>
                        <Segment.Group>

                            <AddTodo/>
                            <TodoList/>

                            <Segment>
                                <InfoBar/>
                            </Segment>

                        </Segment.Group>
                    </Segment>
                </div>
            </Provider>
        );
    }
}

export default Board;