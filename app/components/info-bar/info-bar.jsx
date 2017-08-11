import React from 'react'
import Filter from './filter'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '!style-loader!webpack-sass!./info-bar.scss'
import {Menu} from 'semantic-ui-react'


class InfoBar extends React.Component {
    render (){
        const {todoLeft, todoAll, todoCompleted} = this.props
        return (
            <div className="info-bar">
                <div className="item-left ui left floated aligned">{todoLeft} items left</div>
                <Menu secondary className="menu ui right floated aligned">
                    <Filter name={'All'+todoAll} filter="SHOW_ALL"/>
                    <Filter name={'Active'+todoLeft} filter="SHOW_ACTIVE"/>
                    <Filter name={'Completed'+todoCompleted} filter="SHOW_COMPLETED"/>
                </Menu>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    todoLeft: state.todos.filter(t => !t.completed).length,
    todoAll: state.todos.length,
    todoCompleted: state.todos.filter(t => t.completed).length
})

const ConnectedInfoBar = connect(mapStateToProps)(InfoBar)

export default ConnectedInfoBar