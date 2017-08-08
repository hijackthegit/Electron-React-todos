import React from 'react'
import {Checkbox, Segment} from 'semantic-ui-react'
import '!style-loader!webpack-sass!./item.scss'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        }
    }

    render () {
        return (
            <div className={"todo-item"}>
                <Segment attached={true}><Checkbox onClick={()=>this._toggle()} checked={this.state.completed} label={this.props.label} /></Segment>
            </div>
        );
    }

    _toggle () {
        this.setState({completed: !this.state.completed})
    }
}

export default Item;