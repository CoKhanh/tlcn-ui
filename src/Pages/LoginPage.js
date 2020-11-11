import React, { Component } from 'react';
import '../App.css';
import LoginReal from '../Components/LoginReal.js';

class LoginPage extends Component {

    render() {

        return (
            <div>
                <LoginReal/>
                
                {/* <Route path="/" exact component={Newsfeed} />
                <Route path={"/" + this.state.URLproFile} component={ProfilePage} />
                <Route path="/UpdateInfo" component={UpdateInFo} /> */}
            </div>


        );
    }
}

export default LoginPage;
