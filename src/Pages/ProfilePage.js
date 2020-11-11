import React, { Component } from 'react';
import UnderHeaderProfile from '../Components/UnderHeaderProfile.js'
import HeaderNF from '../Components/HeaderNF.js'
class ProfilePage extends Component {
    render() {
        
        return (
            <div>
                <HeaderNF/>
                <UnderHeaderProfile/>
            </div>
        );
    }
}

export default ProfilePage;
