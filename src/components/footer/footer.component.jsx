import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

    class Footer extends Component {
    render(){
        return(
            <footer>
                    <div>
                        <NavLink to="/"></NavLink>
                        <span>主页</span>
                    </div>
                    <div>
                        <NavLink to="/shop"></NavLink>
                        <span>商城</span>
                    </div>
                    <div>
                        <NavLink to="/comment"></NavLink>
                        <span>点评</span>
                    </div>
                    <div>
                        <NavLink to="/user"></NavLink>
                        <span>我的</span>
                    </div>
            </footer>
        )
    }
}

export default Footer