import React from 'react'
import ReactDOM from 'react-dom'
import { Header,Segment } from 'semantic-ui-react'
import '!style-loader!webpack-sass!./app.scss'

let TITLE = 'todos'

class Todos extends React.Component {
    constructor() {
        super();
    }

    render() {
        return  (
            <div className="main">
                <h1 className="header">{TITLE}</h1>
                <Segment raised={true}>
                </Segment>
            </div>);
    }

}

ReactDOM.render(
    <Todos/>,
    document.getElementById('root')
);