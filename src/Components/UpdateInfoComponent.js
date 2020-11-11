import React, { Component } from 'react';
import API from '../Components/API.js'
class UpdateInfoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Editting: false,
            visibleTagEmailNew: false,
            visibleOTP: false,
            visibleTagSdt: false,
            visibleDivEmail: true,
            data: null,
            token: '',
            // widthProgress: 0,
        }
    }
    testApi = (route, headers, params) => {
        var api = new API()
        api.onCallAPI('post', route, {}, params, headers).then(res => {
            if (res.data.error_code !== 0) {
                window.alert(res.data.message)
            } else {
                this.setState({
                    data: res.data.data,
                    token: res.data.data.token
                })
                // console.log(res.data.data)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    onShowUserInfo = () => {
        var data = this.state.data;
        if (data) {
            return (
            <div className="tableContentInfo">
                <h3 style={{ padding: "10px", backgroundColor: "rgba(0,0,0,.05)" }}> Thông tin cá nhân </h3>
                {/* Dòng tên (họ và tên) */}
                <div className="row container-fluid" id="row1">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 w-160px" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">Tên</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">{data.last_name + " " + data.first_name}</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">
                                <a data-toggle="collapse" href="#FixName" id="test" aria-expanded="false"
                                    name="fixing"
                                    onClick={this.clickTest}
                                    aria-controls="FixName">
                                    Chỉnh sửa
                                </a></li>
                        </ul>
                    </div>
                </div>
                {/* div chứa thành phần collapse khi nhấn vào chỉnh sửa */}
                <div className="collapse" id="FixName">
                    <div className="card card-body">
                        <form onSubmit={this.handleSubmitTen}>
                            <div className="table-responsive">
                                <table className="table table-hover" style={{ margin: "unset", marginTop: "5px" }}>
                                    <tbody>
                                        <tr>
                                            <th style={{ padding: "8px 0px 0px", verticalAlign: "unset", textAlign: "center", border: "unset" }}>
                                                Họ: </th>
                                            <td style={{ padding: "unset", border: "unset" }}>
                                                <input type="text" autoComplete="off" className="form-control" name="txtHo"
                                                    id="txtHo" onKeyDown={this.handleKeyDown}
                                                    // onKeyPress={(e) => this.handleKeypressTxt}
                                                    defaultValue={data.last_name}
                                                    style={{ width: "80%", float: "left" }}
                                                    placeholder="Input field" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th style={{ padding: "8px 0px 0px", verticalAlign: "unset", textAlign: "center", border: "unset" }}>
                                                Tên:</th>
                                            <td style={{ padding: "unset", border: "unset" }}>
                                                <input type="text" autoComplete="off" className="form-control" name="txtTen"
                                                    id="txtTen" onKeyDown={this.handleKeyDown}
                                                    // onKeyPress={(e) => this.handleKeypressTxt}
                                                    defaultValue={data.first_name}
                                                    style={{ width: "80%", float: "left" }}
                                                    placeholder="Input field" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="modal fade" id="ModalTen" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <label>Mật khẩu:</label>
                                                <input type="text" className="form-control" autoComplete="off" id="password" placeholder="Input field" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary"
                                                    onClick={this.HandleEditting}
                                                >Submit</button> &nbsp;
                                                <button type="cancel" className="btn btn-default"
                                                    onClick={this.cancelTen}
                                                    data-dismiss="modal">Cancel</button>

                                                <button type="button" id="cancelTen" className="btn btn-default" style={{ display: "none" }} data-dismiss="modal">button</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: "right", marginRight: "17.5%", padding: "5px" }}>
                                <button type="button" className="btn btn-primary"
                                    data-toggle="modal" id="luuHoTen" data-target="#ModalTen">
                                    Lưu thay đổi
                                </button> &nbsp;
                                <button className="btn btn-default" type="button" data-toggle="collapse"
                                    data-target="#FixName" aria-expanded="false" aria-controls="FixName"
                                    onClick={this.cancelTen}
                                >
                                    Hủy
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

                {/* Dòng chứa tên người dùng */}
                <div className="row container-fluid" id="row2">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 w-160px" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">Tên người dùng</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">.../{data.no_sign}</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">
                                <br />
                            </li>
                        </ul>
                    </div>
                </div>
                {/* dòng chứa thông tin liên hệ (sdt, email) */}
                <div className="row container-fluid"  id="row3">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 w-160px" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">Liên hệ<br />(số điện thoại / Email)</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">{data.email} <br /> {data.phone ? data.phone : "chưa có số điện thoại"}</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">
                                <a data-toggle="collapse" href="#FixContact"
                                    name="fixing"
                                    aria-expanded="false" onClick={this.clickTest} aria-controls="FixContact" > Chỉnh sửa<br /> </a> &nbsp;</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse"  id="FixContact">
                    <div className="card card-body">
                        <form onSubmit={this.handleSubmitLienHe}style={{marginTop:"5px"}}>
                            {/* <div className="table-responsive">
                                <table className="table table-hover" style={{ margin: "unset", marginTop: "5px" }}>
                                    <tbody> */}
                            <div className="row">
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
                                    <p style={{
                                        marginBottom: "unset", fontSize: "13px", fontWeight: "bold",
                                        padding: "8px 0 0 15px", width: "fit-content"
                                    }}> Email hiện tại:</p>
                                </div>
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ paddingLeft: "unset" }}>
                                    <input type="text" autoComplete="off" className="form-control" name="txtEmail"
                                        id="txtEmail" onKeyDown={this.handleKeyDown}
                                        // onKeyPress={(e) => this.handleKeypressTxt}
                                        defaultValue={data.email}
                                        style={{ width: "78%", float: "left" }}
                                        placeholder="Input field" />
                                </div>
                            </div>
                            {data.phone ?
                                <div className="row">
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        <p style={{
                                            marginBottom: "unset", fontSize: "13px", fontWeight: "bold",
                                            padding: "8px 0 0 15px", width: "fit-content"
                                        }}> Số điện thoại:</p>
                                    </div>
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ paddingLeft: "unset" }}>
                                        <input type="text" autoComplete="off" className="form-control" name="txtSdt"
                                            id="txtSdt" onKeyDown={this.handleKeyDown}
                                            // onKeyPress={(e) => this.handleKeypressTxt}
                                            defaultValue={data.phone}
                                            style={{ width: "78%", float: "left" }}
                                            placeholder="Input field" />
                                    </div>
                                </div> :

                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ textAlign: "center" }}>
                                        <a href="# ">+Thêm số điện thoại mới.</a>
                                    </div>

                                </div>
                            }

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <label>Mật khẩu:</label>
                                            <input type="text" className="form-control" autoComplete="off" id="password1" placeholder="Input field" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary" data-dismiss="modal"
                                                onClick={this.HandleEditting} >Submit</button> &nbsp;
                                                <button type="cancel" className="btn btn-default" id="cancelContact" data-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            <div style={{ textAlign: "right", marginRight: "17.5%", padding: "5px" }}>
                                <button type="button" className="btn btn-primary"
                                    data-toggle="modal" id="luuContact" data-target="#exampleModal">
                                    Lưu thay đổi
                                </button> &nbsp;
                                <button className="btn btn-default" type="button" data-toggle="collapse"
                                    data-target="#FixContact" aria-expanded="false" aria-controls="FixContact"
                                    onClick={this.cancelTen}
                                >
                                    Hủy
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Dòng chứa thông tin giới tính */}
                <div className="row container-fluid" id="row4">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 w-160px" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">Giới tính</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">{data.sex ? "Nam" : "Nữ"}</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo"> <br /> </li>
                        </ul>
                    </div>
                </div>
                {/* Dòng chưa quốc gia  */}
                <div className="row container-fluid" id="row5">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 w-160px" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">Quốc gia</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo">{data.nation}</li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "unset" }}>
                        <ul className="list-group ulInfo" >
                            <li className="list-group-item liInfo"><a data-toggle="collapse" href="#FixNation"
                                name="fixing"
                                aria-expanded="false" onClick={this.clickTest} aria-controls="FixNation"> Chỉnh sửa</a></li>
                        </ul>
                    </div>
                </div>
                <div className="collapse" id="FixNation">
                    <div className="card card-body">
                        <form>
                            <div className="table-responsive">
                                <table className="table table-hover" style={{ margin: "unset", marginTop: "5px" }}>
                                    <tbody>
                                        <tr>
                                            <th style={{ padding: "8px 0px 0px", verticalAlign: "unset", textAlign: "center", border: "unset" }}>
                                                Quốc gia:</th>
                                            <td style={{ padding: "unset", border: "unset" }}>
                                                <input type="text" autoComplete="off" className="form-control" name="txtHo"
                                                    id="txtNation" onKeyDown={this.handleKeyDown}
                                                    // onKeyPress={(e) => this.handleKeypressTxt}
                                                    defaultValue={data.nation}
                                                    style={{ width: "80%", float: "left" }}
                                                    placeholder="Input field" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <label>Mật khẩu:</label>
                                                <input type="text" className="form-control" autoComplete="off" id="password2" placeholder="Input field" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary" data-dismiss="modal"
                                                    onClick={this.HandleEditting} >Submit</button> &nbsp;
                                                <button type="cancel" className="btn btn-default" id="cancelNation" data-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: "right", marginRight: "17.5%", padding: "5px" }}>
                                <button type="button" className="btn btn-primary"
                                    data-toggle="modal" id="luuNation" data-target="#exampleModal">
                                    Lưu thay đổi
                                </button> &nbsp;
                                <button className="btn btn-default" type="button" data-toggle="collapse"
                                    data-target="#FixContact" aria-expanded="false" aria-controls="FixContact"
                                    onClick={this.cancelTen}
                                >
                                    Hủy
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )
        }

    }

    handleSubmitTen = (e) => {
        var password = "123";
        var param = {
            last_name: document.getElementById("txtHo").value,
            first_name: document.getElementById("txtTen").value,
            update_type: 0,
            user_id: "5f5c5c17ba3700002b00501c",
        }
        var route = "user/update/info";
        var header = {};
        e.preventDefault();
        if (document.getElementById("password").value === password) {
            this.testApi(route, header, param);
            document.getElementById("FixName").className = "collapse";
            document.getElementById("password").value = '';
            document.getElementById("cancelTen").click();
            document.getElementById("btnStart").click();
            document.getElementById("changeInfo").style.display = "none";
            setTimeout(this.myfunction, 3000);
            return;
        }
        if (document.getElementById("password").value === '') {
            return;
        }
        alert("Bạn đã nhập sai mật khẩu");

    }
    myfunction() {
        document.getElementById("changeInfo").style.display = "block";
    }
    onTest = (email, ho, ten, nation) => {
        this.props.onTest(email, ho, ten, nation)
    }
    componentDidMount() {
        document.getElementById("changeInfo").style.opacity = 0.1
        document.getElementById("changeInfo").disabled = true;

        document.getElementById("btnStart").click();
        setTimeout(
            this.functionDidMount, 3000
        )
    }
    functionDidMount() {
        document.getElementById("changeInfo").style.display = "block"
        document.getElementById("loader").style.display = "none";
        document.getElementById("changeInfo").style.opacity = 1

    }
    handleKeypress = (e) => {
        var value = e.target.value;
        if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9') {
            return;
        }
        else {
            e.target.value = value.substring(0, value.length - 1);
        }
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            document.getElementById("luuHoTen").click();
        }
    }

    cancelTen = () => {
        document.getElementById("txtHo").value = this.state.Ho;
        document.getElementById("txtTen").value = this.state.ten;
        document.getElementById("FixName").className = "collapse";
    }
    clickTest = (e) => {
        var elementClassname = document.getElementsByClassName("collapse in");
        var i;
        for (i = 0; i < elementClassname.length; i++) {
            elementClassname[i].className = "collapse";
        }

    }
  
    render() {
        const params = {
            type_search: '1',
            //search_content:"kh"
            user_id: "5f5c5c17ba3700002b00501c"
            // user_name: '0773961309',
            // password : '1'
            //api_token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLXRsY24uaGVyb2t1YXBwLmNvbS9hcGkvdXNlci9sb2ctaW4iLCJpYXQiOjE2MDMxNzQzMDYsIm5iZiI6MTYwMzE3NDMwNiwianRpIjoiZTM2aGtURFJaUlBXbUxXRCIsInN1YiI6IjVmNjFjODgxZTI0NTAwMDA4YTAwMTA3MyIsInBydiI6IjM4NTJiMjE4NTAxMzU2ZDMzYzYxMjkyYjc1ZjJhZDc1NzI5ODZhMTciLCJ1c2VyX25hbWUiOiJNXHUxZWY5IFBoXHUwMWIwXHUwMWExbmciLCJ1c2VyX2lkIjoiNWY2MWM4ODBlMjQ1MDAwMDhhMDAxMDcyIiwidXNlcl9mdWxsX25hbWUiOiJOZ1x1MDBmNCBMYW4gSFx1MDFiMFx1MDFhMW5nIiwicGhvbmUiOiIwNzczOTYxMzA5IiwiZW1haWwiOiJpZG9sQG9yaW9ubWVkaWEudm4xMjMiLCJzZXgiOiIwIn0.vdSKn5F6XoXxEo4iVcRzIYSHYKJFBz3TuFI_aKmlhKA'
        }
        const route = 'user/search-v1'
        const headers = {
            Authorization: 'bearer' +
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLXRsY24uaGVyb2t1YXBwLmNvbS9hcGkvdXNlci9sb2ctaW4iLCJpYXQiOjE2MDMxNzQzMDYsIm5iZiI6MTYwMzE3NDMwNiwianRpIjoiZTM2aGtURFJaUlBXbUxXRCIsInN1YiI6IjVmNjFjODgxZTI0NTAwMDA4YTAwMTA3MyIsInBydiI6IjM4NTJiMjE4NTAxMzU2ZDMzYzYxMjkyYjc1ZjJhZDc1NzI5ODZhMTciLCJ1c2VyX25hbWUiOiJNXHUxZWY5IFBoXHUwMWIwXHUwMWExbmciLCJ1c2VyX2lkIjoiNWY2MWM4ODBlMjQ1MDAwMDhhMDAxMDcyIiwidXNlcl9mdWxsX25hbWUiOiJOZ1x1MDBmNCBMYW4gSFx1MDFiMFx1MDFhMW5nIiwicGhvbmUiOiIwNzczOTYxMzA5IiwiZW1haWwiOiJpZG9sQG9yaW9ubWVkaWEudm4xMjMiLCJzZXgiOiIwIn0.vdSKn5F6XoXxEo4iVcRzIYSHYKJFBz3TuFI_aKmlhKA'
        }


        return (
            // className="table-responsive tblNoneEditting">
            <div>
                <button type="button" className="btn btn-default" id="btnStart"
                    style={{ display: "none" }} onClick={this.testApi(route, headers, params)}>button</button>
                {this.onShowUserInfo()}

            </div >
        );
    }
}

export default UpdateInfoComponent;
