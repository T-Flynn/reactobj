import React,{Component} from 'react';
import {
    HashRouter,
    Route
} from 'react-router-dom';


import Home from './home/home.component.jsx';
import Comment from './comment/comment.component.jsx';
import Shop from './shop/shop.component.jsx';
import User from './user/user.component.jsx';
import Footer from './footer/footer.component.jsx'


class Routing extends Component {
    
    
    render() {
        return(
            <HashRouter>
                <div>
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/shop"  component={Shop}/>
                        <Route path="/comment" component={Comment} />
                        <Route path="/user" component={User}/>
                    </main>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}
export default Routing