import React, { Component } from 'react';
// import APICall from './APICall.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Newsfeed from './Pages/Newsfeed.js';
import ProfilePage from './Pages/ProfilePage.js'
import UpdateInFo from './Pages/UpdateInFo.js'
import LoginPage from './Pages/LoginPage.js'
// import UpdateInFo from './Pages/UpdateInFo.js'
// import UnderHeaderProfile from './Components/UnderHeaderProfile'
// import Condikhanh from './Components/APICall.js'
// import ProfilePage from './Pages/ProfilePage.js'
// import Newsfeed from './Pages/Newsfeed.js'
// import LoginReal from './Pages/LoginPage.js'
// import HeaderNF from './Components/HeaderNF';
// import HeaderNF from './Components/HeaderNF.js';
// import ContentStatusNoImg from './Components/ContentStatusNoImg.js';
// import StatusContent from './Components/StatusContent.js'
class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            first_name: "",
            nation: "",
            last_name: "",
            URLproFile: "ngolanhuongofficial",
            userID: "",
            userToken: ""
        }
        // this.onTest1 = this.onTest1.bind(this)
    }

    // CoKhanh = () => {
    //     var params = {
    //         user_id: "5f61c880e24500008a001072",
    //         email: this.state.email,
    //         last_name: this.state.last_name,
    //         first_name: this.state.first_name,
    //         nation: this.state.nation,
    //         update_type: 0
    //     }
    //     var route = 'user/update/info'
    //     var lstUser = new Condikhanh()
    //     lstUser.onPostMethod(route, params).then(
    //         res => {
    //             // res.data.data.forEach((p)=>{
    //             //   data_rs.push(p)
    //             console.log(res.data.data);
    //             // })
    //         }

    //     )

    // }
    // onTest1 = (email, ho, ten, nation) => {
    //     this.setState({
    //         email: email,
    //         last_name: ten,
    //         first_name: ho,
    //         nation: nation
    //     })
    //     //console.log(data)
    // }
    componentDidMount() {
        //localStorage.clear();
    }
    render() {
        // const style = {
        //     background: "rgba(0,0,0,0.1)"
        // }

        return (
            <Router>
                <div className="imgNoWidth">
                    
                </div>
                {!localStorage.getItem("UserToken") && <LoginPage />}
                {localStorage.getItem("UserToken") && <Route path="/" exact component={Newsfeed} />}
                {localStorage.getItem("UserToken") && <Route path={"/" + this.state.URLproFile}
                    component={ProfilePage} />}
                {localStorage.getItem("UserToken") && <Route path="/UpdateInfo" component={UpdateInFo} />}
            </Router>
        );
    }
}

export default App;
