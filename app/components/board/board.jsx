import React from 'react'
import {Segment, Input, Form} from 'semantic-ui-react'
import Item from '../item/item'
import InfoBar from '../info-bar/info-bar'
import '!style-loader!webpack-sass!./board.scss'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if(!this.state.value) {
            return;
        }
        this._addToList();

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    _addToList() {
        let newList = this.state.list.concat(<Item label={this.state.value}/>);
        this.setState({list: newList.reverse()});
        this.setState({value: ''});
    }

    render() {
        return (
            <div className="board">
                <Segment stacked={true} raised={true}>
                    <Segment.Group>
                        <Form onSubmit={this.handleSubmit}>
                            <Input className="input" onChange={this.handleChange} value={this.state.value}
                                   icon='chevron down' iconPosition='left'
                                   placeholder='What needs to be done?'/>
                        </Form>
                        {
                            this.state.list.map((item, idx) => {
                                return item
                            })
                        }
                        <Segment>
                            <InfoBar/>
                        </Segment>

                    </Segment.Group>
                </Segment>
            </div>
        );
    }
}

export default Board;