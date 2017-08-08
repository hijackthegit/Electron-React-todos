import React from 'react'

import '!style-loader!webpack-sass!./info-bar.scss'
import { Menu } from 'semantic-ui-react'

class InfoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unfinished: 0,
            activeItem: 'all'
        }
    }

    render() {
        return  (
            <div className="info-bar">
                <div className="item-left ui left floated aligned">{this.state.unfinished} items left
                </div>
                <Menu secondary className="menu ui right floated aligned">
                    <Menu.Item name='All' active={this.state.activeItem === 'all'} onClick={()=>this._triggerMenu('all')} />
                    <Menu.Item name='Active' active={this.state.activeItem === 'active'} onClick={()=>this._triggerMenu('active')} />
                    <Menu.Item name='Completed' active={this.state.activeItem === 'completed'} onClick={()=>this._triggerMenu('completed')} />
                </Menu>
            </div>
        );
    }

    _triggerMenu (menu) {
        this.setState({activeItem: menu});
    }
}
export default InfoBar;