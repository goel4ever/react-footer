import React, {Component} from 'react';
import MenuBar from '../menu-bar/MenuBar';
import { Avatar } from '../avatar';

import './index.css';

/**
 * Properties:
 * 1. Sticky Header true/false
 */
class Header extends Component {
    render() {
        return (
            <div className="header">
              <Avatar src="/images/78dfd6fbd480387a0610b587cbfcd0ad.jpg" />
              <MenuBar />
            </div>
        );
    }
}

export default Header;
