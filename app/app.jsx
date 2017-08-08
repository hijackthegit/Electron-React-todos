import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/board/board'
import { Segment } from 'semantic-ui-react'
import '!style-loader!webpack-sass!./app.scss'
//have not found the way to include hashed css
// import '!style-loader!file-loader!semantic-ui-css/semantic.min.css'
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
                    <Board/>
                </Segment>
            </div>);
    }

}

ReactDOM.render(
    <Todos/>,
    document.getElementById('root')
);