import React, { Component } from 'react';
import './UpdateInfo.css';
// import key from '../HinhAnh/key.png'
import HeaderNF from '../Components/HeaderNF.js'
import UpdateInfoComponent from '../Components/UpdateInfoComponent.js'
class UpdateInFo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    openCity = (evt, cityName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent1");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    componentDidMount() {
        document.getElementById("defaultOpen").click();
    }
    render() {
        const params = {
            type_search: '1',
            user_id: "5f5c5c17ba3700002b00501c"
            // user_name: '0773961309',
            // password : '1'
            //api_token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLXRsY24uaGVyb2t1YXBwLmNvbS9hcGkvdXNlci9sb2ctaW4iLCJpYXQiOjE2MDMxNzQzMDYsIm5iZiI6MTYwMzE3NDMwNiwianRpIjoiZTM2aGtURFJaUlBXbUxXRCIsInN1YiI6IjVmNjFjODgxZTI0NTAwMDA4YTAwMTA3MyIsInBydiI6IjM4NTJiMjE4NTAxMzU2ZDMzYzYxMjkyYjc1ZjJhZDc1NzI5ODZhMTciLCJ1c2VyX25hbWUiOiJNXHUxZWY5IFBoXHUwMWIwXHUwMWExbmciLCJ1c2VyX2lkIjoiNWY2MWM4ODBlMjQ1MDAwMDhhMDAxMDcyIiwidXNlcl9mdWxsX25hbWUiOiJOZ1x1MDBmNCBMYW4gSFx1MDFiMFx1MDFhMW5nIiwicGhvbmUiOiIwNzczOTYxMzA5IiwiZW1haWwiOiJpZG9sQG9yaW9ubWVkaWEudm4xMjMiLCJzZXgiOiIwIn0.vdSKn5F6XoXxEo4iVcRzIYSHYKJFBz3TuFI_aKmlhKA'
        };
        const route = 'user/search-v1';
        const headers = {
            Authorization: 'bearer' +
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLXRsY24uaGVyb2t1YXBwLmNvbS9hcGkvdXNlci9sb2ctaW4iLCJpYXQiOjE2MDMxNzQzMDYsIm5iZiI6MTYwMzE3NDMwNiwianRpIjoiZTM2aGtURFJaUlBXbUxXRCIsInN1YiI6IjVmNjFjODgxZTI0NTAwMDA4YTAwMTA3MyIsInBydiI6IjM4NTJiMjE4NTAxMzU2ZDMzYzYxMjkyYjc1ZjJhZDc1NzI5ODZhMTciLCJ1c2VyX25hbWUiOiJNXHUxZWY5IFBoXHUwMWIwXHUwMWExbmciLCJ1c2VyX2lkIjoiNWY2MWM4ODBlMjQ1MDAwMDhhMDAxMDcyIiwidXNlcl9mdWxsX25hbWUiOiJOZ1x1MDBmNCBMYW4gSFx1MDFiMFx1MDFhMW5nIiwicGhvbmUiOiIwNzczOTYxMzA5IiwiZW1haWwiOiJpZG9sQG9yaW9ubWVkaWEudm4xMjMiLCJzZXgiOiIwIn0.vdSKn5F6XoXxEo4iVcRzIYSHYKJFBz3TuFI_aKmlhKA'
        };
        return (<div>
            <HeaderNF />
            <div className="container mainwall">
                <h3 className="h3Table"> Cài đặt tài khoản và thông tin cá nhân.</h3>
                <div className="tab1">
                    <button className="tablinks btnFixInfo"
                        onClick={(event) => this.openCity(event, 'changeInfo')}
                        id="defaultOpen">Chỉnh sửa thông tin cá nhân</button>
                    <button className="tablinks btnFixInfo"
                        onClick={(event) => this.openCity(event, 'changePassword')}
                    >Đổi mật khẩu</button>
                </div>
                <div id="loader"></div>

                <div id="changeInfo" className="tabcontent1">
                    <UpdateInfoComponent param1={params} route1={route} header1={headers} />
                </div>

                <div id="changePassword" className="tabcontent1">
                    <h1> có content nha</h1>
                </div>
            </div>
        </div >
        );
    }
}

export default UpdateInFo;
