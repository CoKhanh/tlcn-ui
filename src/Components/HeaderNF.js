import React, { Component } from "react";
import NgoLanHuong3 from "../HinhAnh/NgoLanHuong3.jpg"
import notification from '../HinhAnh/notification.png'
import FriendAdd from './FriendAdd.js'
import MessengerFacebook from './MessengerFacebook.js'
class HeaderNF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "welcome to JS",
    };
  }

  render() {
    const styleofButton = {
      width: '100%',
      textAlign: 'left',
      padding: '0 12px 1px',
    }
    return (
      <div className="HeaderNFbar">
        <nav className="navbar navbar-inverse " style={{ border: "unset" }}>
          <div className="mx-auto container ml-auto1">
            <div className="form-group ">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 fbICon" >
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img
                    className="facebook"
                    src="https://www.facebook.com/images/fb_icon_325x325.png"
                    width="34px"
                    height="34px"
                    alt="facebook"
                    style={{ margin: "8px 0", border: "2px solid white" }}
                  />
                </a>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 textHeader">
                <input
                  type="text"
                  id="txtTimkiem"
                  className="form-control txtTimKiem"
                  placeholder="Tìm kiếm"
                />
                <button type="button" className="btn btn-info btnSearch" >
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </div>

              <div className="TrangChuHome">
                <ul className="nav navbar-nav" style={{ width: "unset" }}>
                  <li className="boderrightSolid">
                    <a className="mainmenubtn" href="/ngolanhuongofficial" style={styleofButton}>
                      <img
                        src={NgoLanHuong3}
                        width="50px"
                        height="50px"
                        className="ImageProfile"
                        alt="facebook Profile Image1"
                      /> &nbsp; <strong>Hương</strong>
                    </a>
                  </li>

                  <li className="active boderrightSolid">
                    <a className="HeaderHome" href="/">
                      <strong>Trang chủ</strong>
                    </a>
                  </li>
                  <FriendAdd />
                  <MessengerFacebook />
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-primary dropdown-toggle friendHeader"
                        type="button" data-toggle="dropdown"
                      >
                        {/* #0055a8 */}
                        <img
                          src={notification}
                          width="25px"
                          height="25px"
                          className="ImageProfile"
                          alt="facebook Profile Image1"
                        />
                      </button>
                      <div className="dropdown-menu  dropdown-menu-right ulDropdownFriend">
                        <ul>
                          <li>
                            <h3 style={{ fontSize: "12px", fontWeight: "600" }}> Lời mời kết bạn</h3>
                          </li>
                          {/* {friendAddElement} */}
                          <li className="liAllRequest">
                            <a href="# " className="AllFriendRequest">Xem tất cả</a>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="dropdown">
                      <button className="btn btn-primary dropdown-toggle friendHeader"
                        type="button" data-toggle="dropdown" style={{
                          padding: "15px 8px", background: "transparent", border: "unset"
                        }}>
                        <span className="glyphicon glyphicon-chevron-down" style={{ color: "black" }}>

                        </span>
                      </button>
                      <ul className="dropdown-menu  dropdown-menu-right">
                        <li>
                          <a href="/updateinfo">Cài đặt thông tin cá nhân</a>
                        </li>

                        <li>
                          <a href="/">Đăng xuất</a>
                        </li>

                        <li>
                          <a href="# ">JavaScript</a>
                        </li>

                      </ul>
                    </div>
                  </li>

                </ul>

              </div>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderNF;
