import React, { Component } from 'react';
import '../style-complete.css';
import API from '../Components/API.js';

class LoginReal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      VisibleExplainSex: false,
      user_id: "",
      phone_verified:"",
      token: ''
    }
  }

  testApi = (route, headers, params) => {
    var api = new API()
    api.onCallAPI('post', route, {}, params, headers).then(res => {
      if (res.data.error_code !== 0) {
        window.alert(res.data.message)
        
      }
       
      else {
       
        this.setState({
          user_id: res.data.data.user_id,
          token: res.data.data.token,
          phone_verified: res.data.data.phone_verified
        })
        if(!this.state.phone_verified){
          document.getElementById("btnModalOTP").click();
          this.onLogin();
          return;
        }
        localStorage.setItem('UserToken', res.data.data.token);
       document.getElementById("returnLogin").click();
        // console.log(res.data.data)
      }

    }).catch(err => {
      console.log(err)
    })
  }
  componentDidMount() {

    //document.getElementById("btnSignUp").click();
  }
  onLogin = (e) => {
    const param = {
      user: document.getElementById("email1").value,//'0773961309',
      password: document.getElementById("password1").value,//'1'
    }
    const route = 'user/log-in'
    this.testApi(route, {}, param);
  }
  onSignUp = (e) => {
    const params = {
      first_name: document.getElementById("txtHoSignUp").value,//'0773961309',
      last_name: document.getElementById("txtTenSignUp").value,
      password: document.getElementById("passwordSignUp").value,//'1'
      email: document.getElementById("emailSignUp").value,
      phone: document.getElementById("phoneSignUp").value,
      sex: document.getElementById("sexSignUp").checked ? "1" : "0",
      dOb: document.getElementById("daySignUp").value + "/" + document.getElementById("MonthSignUp").value + "/" + document.getElementById("yearSignUp").value
    }
    // console.log(params.dOb);
    const route = 'user/register'
    var api = new API()
    api.onCallAPI('post', route, {}, params, {}).then(res => {
      if (res.data.error_code !== 0) {
        window.alert(res.data.message)
      } else {
      }

    }).catch(err => {
      console.log(err)
    })
  }

  CheckSDT = () => {
    var route = "user/update/info"
    var params = {
      user_id: this.state.user_id,
      otp_token: document.getElementById("txtOTPSignUp").value,
      update_type: 5,
    }
    var api = new API()
    api.onCallAPI('post', route, {}, params, {}).then(res => {

      if (res.data.error_code !== 0) {
        window.alert(res.data.message)
      } else {
        window.alert("Đã xác thực otp")
      }

    }).catch(err => {
      console.log(err)
    })
  }

  render() {

    return (
      <div>
        <a href="/" exact="true" style={{display:"none"}} id="returnLogin">...</a>
        <button type="button" id="btnModalOTP" style={{ display: "none" }}
          className="btn btn-primary" data-toggle="modal" data-target="#modalOTP">
          Launch demo modal
        </button>
        <div className="modal fade" id="modalOTP" tabIndex="-1" role="dialog"
          aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="text" id="txtOTPSignUp" className="form-control" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => this.CheckSDT()}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <title>Facebook</title>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" />
          {/*Helvetica Neue*/}
          <div className="front-img">
            {/* <img src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="facebook lite" /> */}
          </div>
          <div className="wrapper" style={{ fontSize: "17px" }}>
            {/*-Inner wrapper*/}
            <div className="inner-wrapper">
              {/* main container */}
              <div className="main-container">
                {/* content left*/}
                <div className="content-left">
                  <br />
                  <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    className="img-responsive fbLoginPage" alt="image1"
                    height="106px"
                    width="301px" />
                  <h2 style={{ textAlign: "left", marginTop: "10px", color: "black" }}>
                    Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
                </div>{/* content left ends */}
                {/* content right ends */}
                <div className="content-right">
                  {/* Log In Section */}
                  <div className="login-wrapper">
                    <div className="login-div">
                      <ul>
                        <li>
                          <input autoComplete="off" type="text" id="email1"
                            name="email" placeholder="Email hoặc số điện thoại" />
                        </li>
                        <li>
                          <input autoComplete="off" type="password" id="password1" placeholder="Mật khẩu" />
                          <br />
                          <button type="button" className="btn btn-default btnLogin" id="btnDangNhap"
                            onClick={() => this.onLogin()}
                          >Đăng nhập</button>
                        </li>
                        <div className="aForgotPass">
                          <a href="# " style={{ marginTop: "16px" }} >Quên mật khẩu?</a>
                        </div>
                        <hr style={{ margin: "20px 16px" }} />
                        <li style={{ textAlign: "center" }}>
                          <div>
                            <button type="button"
                              className="btn btn-default btnDangKi"
                              data-toggle="modal"
                              id="btnSignUp"
                              data-target="#exampleModal">
                              Tạo tài khoản mới </button>
                          </div>

                        </li>
                      </ul>
                    </div>
                  </div>{/* log in wrapper end */}
                  {/* SignUp Section */}
                  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <br /> <br />
                    <div className="modal-dialog" role="document">
                      <div className="modal-content" style={{ width: "432px" }}>
                        <div className="modal-header" style={{ paddingBottom: "unset" }} >
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <h3 className="modal-title" id="exampleModalLongTitle">Đăng Kí</h3>
                          <h5> Nhanh chóng và dễ dàng.</h5>

                        </div>
                        {/* <div className="modal-body"> */}
                        <div className="signup-div" style={{ textAlign: "center", paddingTop: "10px" }}>
                          <div className="inputName">
                            <input autoComplete="off" type="text" name="txtHo"
                              id="txtHoSignUp"
                              className="textHo" placeholder="Họ"
                            />

                            <input autoComplete="off" type="text"
                              name="txtTen" id="txtTenSignUp"
                              placeholder="Tên" className="textHo textTen" />
                          </div>

                          <div className="inputName">
                            {/* <input autoComplete="off" type="text"
                              name="txtUserName" id="txtUserNameSignUp" style={{ marginBottom: "10px" }}
                              className="textHo textContact"
                              placeholder="Tên hiển thị" /> */}
                            <input autoComplete="off" type="text"
                              name="email" id="emailSignUp" style={{ marginBottom: "10px" }}
                              className="textHo textContact"
                              placeholder="Email" />
                            <input autoComplete="off" type="text"
                              name="sdt" id="phoneSignUp"
                              className="textHo textContact"
                              placeholder="Số di động" />
                          </div>
                          <div className="inputName">
                            <input autoComplete="off"
                              className="textHo textContact"
                              type="password"
                              name="password" id="passwordSignUp"
                              placeholder="Mật khẩu" />
                          </div>
                          <div className="inputName" style={{ textAlign: "left" }}>
                            <span className="label" style={{ color: "black" }}>Ngày sinh:</span>
                            <div style={{ textAlign: "left", paddingLeft: "2.5%" }}>
                              <select aria-label="Ngày"
                                className="inputDay  "
                                name="birthday_day"
                                id="daySignUp" title="Ngày">
                                <option value="0">Ngày</option>

                                <option value="01">01</option>

                                <option value="02">02</option>

                                <option value="03">03</option>

                                <option value="04">04</option>

                                <option value="05">05</option>

                                <option value="06">06</option>

                                <option value="07">07</option>

                                <option value="08">08</option>

                                <option value="09">09</option>

                                <option value="10">10</option>

                                <option value="11">11</option>

                                <option value="12">12</option>

                                <option value="13">13</option>

                                <option value="14">14</option>

                                <option value="15">15</option>

                                <option value="16">16</option>

                                <option value="17">17</option>

                                <option value="18">18</option>

                                <option value="19">19</option>

                                <option value="20">20</option>

                                <option value="21">21</option>

                                <option value="22">22</option>

                                <option value="23">23</option>

                                <option value="24">24</option>

                                <option value="25">25</option>

                                <option value="26">26</option>

                                <option value="27">27</option>

                                <option value="28">28</option>

                                <option value="29">29</option>

                                <option value="30">30</option>

                                <option value="31">31</option>

                              </select>
                              <select aria-label="Tháng"
                                className="inputDay inputThang "
                                name="birthday_month"
                                id="MonthSignUp" title="Tháng">
                                <option value="0">Tháng</option>

                                <option value="01">01</option>

                                <option value="02">02</option>

                                <option value="03">03</option>

                                <option value="04">04</option>

                                <option value="05">05</option>

                                <option value="06">06</option>

                                <option value="07">07</option>

                                <option value="08">08</option>

                                <option value="09">09</option>

                                <option value="10">10</option>

                                <option value="11">11</option>

                                <option value="12">12</option>

                              </select>
                              <select aria-label="Năm" name="birthday_year" id="yearSignUp" title="Năm" className="inputDay inputThang">
                                <option value="0">Năm</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                                <option value="1959">1959</option>
                                <option value="1958">1958</option>
                                <option value="1957">1957</option>
                                <option value="1956">1956</option>
                                <option value="1955">1955</option>
                                <option value="1954">1954</option>
                                <option value="1953">1953</option>
                                <option value="1952">1952</option>
                                <option value="1951">1951</option>
                                <option value="1950">1950</option>
                                <option value="1949">1949</option>
                                <option value="1948">1948</option>
                                <option value="1947">1947</option>
                                <option value="1946">1946</option>
                                <option value="1945">1945</option>
                                <option value="1944">1944</option>
                                <option value="1943">1943</option>
                                <option value="1942">1942</option>
                                <option value="1941">1941</option>
                                <option value="1940">1940</option>
                                <option value="1939">1939</option>
                                <option value="1938">1938</option>
                                <option value="1937">1937</option>
                                <option value="1936">1936</option>
                                <option value="1935">1935</option>
                                <option value="1934">1934</option>
                                <option value="1933">1933</option>
                                <option value="1932">1932</option>
                                <option value="1931">1931</option>
                                <option value="1930">1930</option>
                                <option value="1929">1929</option>
                                <option value="1928">1928</option>
                                <option value="1927">1927</option>
                                <option value="1926">1926</option>
                                <option value="1925">1925</option>
                                <option value="1924">1924</option>
                                <option value="1923">1923</option>
                                <option value="1922">1922</option>
                                <option value="1921">1921</option>
                                <option value="1920">1920</option>
                                <option value="1919">1919</option>
                                <option value="1918">1918</option>
                                <option value="1917">1917</option>
                                <option value="1916">1916</option>
                                <option value="1915">1915</option>
                                <option value="1914">1914</option>
                                <option value="1913">1913</option>
                                <option value="1912">1912</option>
                                <option value="1911">1911</option>
                                <option value="1910">1910</option>
                                <option value="1909">1909</option>
                                <option value="1908">1908</option>
                                <option value="1907">1907</option>
                                <option value="1906">1906</option>
                                <option value="1905">1905</option>
                              </select>
                            </div>
                          </div>
                          <div className="inputName" style={{ textAlign: "left" }}>
                            <span className="label" style={{ color: "black" }}>Giới tính:</span>
                            <br />
                            <label style={{ paddingLeft: "2.5%" }}>
                              <input type="checkbox" id="sexSignUp" value="sex" />
                                &nbsp; Nam
                                <span onMouseEnter={() => this.setState({
                                VisibleExplainSex: !this.state.VisibleExplainSex
                              })}
                                onMouseLeave={() => this.setState({
                                  VisibleExplainSex: !this.state.VisibleExplainSex
                                })} className="ml-5 glyphicon glyphicon-info-sign"></span>
                              {this.state.VisibleExplainSex && <div className="ExplainSex">
                                <strong>Nếu bạn là nam thì tick vào ô Nam.</strong>
                              </div>}
                            </label>
                          </div>

                          <div style={{ textAlign: "center" }}>
                            <button
                              onClick={() => this.onSignUp()}
                              autoComplete="off"
                              type="button"
                              className="btnDangKi btnDangKiModal"
                              defaultValue="Signup for facebook" > Đăng ký</button>
                          </div>

                          {/*
                           <li className="error-li">
                            <div className="span-fp-error"></div>
                           </li>
                          */}
                        </div>
                        {/* </div> */}
                        <div className="modal-footer">
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* SIGN UP wrapper end */}
                </div>{/* content right ends */}
              </div>{/* main container end */}
            </div>{/* inner wrapper ends*/}
          </div>{/* ends wrapper */}
        </div>
        {
          // this.onLogin()
        }
        {/* {this.onShowDATA()} */}
      </div>
    );
  }
}

export default LoginReal;
