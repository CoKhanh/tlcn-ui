import React, { Component } from "react";
import ImageNF from "../HinhAnh/NewsFeed.png";
import PublicImage from "../HinhAnh/Public.png";
import FriendIcon from "../HinhAnh/FriendIcon.png";
import PrivateICon from "../HinhAnh/PrivateICon.png";
import NgoLanHuong3 from "../HinhAnh/NgoLanHuong3.jpg"
import TextareaAutosize from 'react-textarea-autosize';
import fbPictureAdd from "../HinhAnh/fbPictureAdd.png"
import tagName from "../HinhAnh/tagName.png"
import marker from "../HinhAnh/marker.png"

class StatusContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: PublicImage,
      alt: "PublicIcon",
      name: "Công khai",
      class: "PublicImageIcon",
      ContentWhoAndWhere: "Với",
      WithWhoOrWhere: "Cùng với ai?",
      tagsName: false,
      checkin: false,
      idTagsName: "txtTagsName",
      IMGDinhKem: "",
      VisibleIMGdk: false,
      widthProgress: 0
    };
  }
  setStatePrivate = () => {
    this.setState({
      src: PrivateICon,
      alt: "PrivateIcon",
      name: "Chỉ mình tôi",
      class: "PrivateImageIcon",
    });
  };
  setStatePublic = () => {
    this.setState({
      src: PublicImage,
      alt: "PublicIcon",
      name: "Công khai",
      class: "PublicImageIcon",
    });
  };
  setStateFriend = () => {
    this.setState({
      src: FriendIcon,
      alt: "FriendIcon",
      name: "Bạn bè",
      class: "FriendImageIcon",
    });
  };
  OpenfileDialog = () => {
    document.getElementById("FileBrowser").click();
    // this.setState({
    //   fileDialog: !this.state.fileDialog
    // })
  }
  openTagsName = () => {
    if (this.state.tagsName && this.state.checkin) {
      this.setState({
        tagsName: false,
        checkin: false
      })
    }
    this.setState({
      tagsName: !this.state.tagsName,
      checkin: false,
      ContentWhoAndWhere: "Với",
      WithWhoOrWhere: "Cùng với ai?"
    })

  }
  openCheckIn = () => {

    this.setState({
      checkin: !this.state.checkin,
      tagsName: false,
      ContentWhoAndWhere: "Tại",
      WithWhoOrWhere: "Bạn đang ở đâu?"
    })
  }
  handleOnChange = (event) => {
    this.setState({
      VisibleIMGdk: !this.state.VisibleIMGdk,
      IMGDinhKem: URL.createObjectURL(event.target.files[0]),
      tagsName: true,
    })
    this.setprogress();
  }
  setprogress = () => {
    var current_value = this.state.widthProgress;

    if (current_value >= 100) {
      return;
    }
    else {
      current_value++;
      this.setState({
        widthProgress: current_value
      })
      console.log(current_value)
      setTimeout(this.setprogress, 100)
    }
  }
  render() {

    const styleProgressBar = {
      width: this.state.widthProgress + "%"
    }
    return (
      <form onSubmit={this.onHandleSubmit}>



        <div className="panel panel-default">
          {/* <!-- Default panel contents --> */}
          <div className="panel-heading">
            {" "}
            <strong>Tạo bài viết</strong>
          </div>
          <div className="panel-body pnStatus">
            <div className="ImageStatus">
              <img
                src={NgoLanHuong3}
                alt="Image1"
                className="IMGStatus"
                width="65px"
                height="65px"
                border-radius="50%"
              />
            </div>
            <TextareaAutosize className="TxtStatus" placeholder={this.props.name + " ơi, bạn đang nghĩ gì?"} />
          </div>
          <div>
            <div>
              {

                (this.state.widthProgress <= 100 && this.state.widthProgress > 0) &&
                <div className="progress progress1" >
                  <div id="mybar"
                    className="progress-bar bg-dark" role="progressbar"
                    style={styleProgressBar}
                    aria-valuenow={this.state.widthProgress} aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>}
              {
                (this.state.widthProgress === 100) && <div><img src={this.state.IMGDinhKem} 
                className="img-responsive" alt="hình ảnh đính kèm" width="100px"
                  height="100px" style={{ marginLeft: "4%" }} />
                  {/* {console.log(this.state.IMGDinhKem)} */}
                </div>
              }
              {
                (this.state.tagsName) &&
                <div className="padding5px">
                  <hr />
                  <table className="tableTagsName" border="1" cellPadding="2" cellSpacing="2">
                    <tbody>
                      <tr>
                        <td className="tdTagsName">
                          <div className="divHaveVoi">
                            {this.state.ContentWhoAndWhere}
                          </div>
                        </td>
                        <td>
                          <input type="text" placeholder={this.state.WithWhoOrWhere} id={this.state.idTagsName} className="CungVoiAi" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
              {
                (this.state.checkin) &&
                <div className="padding5px">
                  <hr />
                  <table className="tableTagsName" border="1" cellPadding="2" cellSpacing="2">
                    <tbody>
                      <tr>
                        <td className="tdTagsName">
                          <div className="divHaveVoi">
                            {this.state.ContentWhoAndWhere}
                          </div>
                        </td>
                        <td>
                          <input type="text" placeholder={this.state.WithWhoOrWhere} id={this.state.idTagsName} className="CungVoiAi" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            </div>
            <hr />
            <div style={{ marginLeft: "6%" }}>

              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 btnInfoStt" >
                <button type="button"
                  className="btn btn-large btn-block btn-default btnAddimgVid"
                  style={{ borderRadius: "16px" }}
                  onClick={this.OpenfileDialog}>
                  <img src={fbPictureAdd} className="imgAddIMG" alt="Hình ảnh" />
                  <strong>Ảnh/Video</strong>
                </button>
                <input type="file" id="FileBrowser" onChange={this.handleOnChange} accept="image/*"
                  style={{ display: "none" }} />
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 btnInfoStt" >
                <button type="button"
                  className="btn btn-large btn-block btn-default btnAddimgVid"
                  style={{ borderRadius: "16px" }}
                  onClick={this.openTagsName}>
                  <img src={tagName} className="imgTags" alt="Gắn thẻ" />
                  <strong>Gắn thẻ bạn bè</strong>
                </button>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 btnInfoStt">
                <button type="button"
                  className="btn btn-large btn-block btn-default btnAddimgVid"
                  style={{ borderRadius: "16px" }}
                  onClick={this.openCheckIn}>
                  <img src={marker} className="imgTags" alt="CheckIn" />
                  <strong>Check in</strong></button>
              </div>

            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>
                  <div className="checkbox CheckBoxNF">
                    <label className="LblIconNF">
                      <input type="checkbox" />
                      <img
                        src={ImageNF}
                        className="ImageNF"
                        width="30%"
                        height="30%"
                        alt="Bảng tin"
                      />
                      <strong>Bảng tin</strong>
                    </label>
                    <div className="alignRight">

                      <div className="dropdown">
                        <a id="TrangThaibtn" role="button" href="# "
                          className="btn btn-primary dropdown-toggle  sttBtnCap"
                          type="button" data-toggle="dropdown"
                          style={{
                            padding: "10px 8px 15px 8px",
                            background: "transparent", border: "unset"
                          }}
                        >
                          {/* #0055a8 */}
                          <img
                            src={this.state.src}
                            alt={this.state.alt}
                            className={this.state.class}
                            width="17%"
                            height="17%"
                          />&nbsp; {this.state.name}
                        </a>
                        <ul className="dropdown-menu">
                          <li><button
                            type="button"
                            className="btnPublic"
                            onClick={() => this.setStatePublic()}
                          >
                            <img
                              src={PublicImage}
                              alt="Public"
                              className="PublicImageIcon"
                              width="17%"
                              height="17%"
                            />
                       &nbsp; Công khai
                      </button></li>
                          <li><button
                            type="button"
                            className="btnFriend"
                            onClick={() => this.setStateFriend()}
                          >
                            <img
                              src={FriendIcon}
                              alt="Friend"
                              className="FriendImageIcon"
                              width="17%"
                              height="17%"
                            />
                        Bạn bè
                      </button></li>
                          <li><button
                            type="button"
                            className="btnPrivate"
                            onClick={() => this.setStatePrivate()}
                          >
                            <img
                              src={PrivateICon}
                              alt="Private"
                              className="PrivateImageIcon"
                              width="17%"
                              height="17%"
                            />
                        Chỉ mình tôi
                      </button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="submit" className="btnDangSTT" >
                    Đăng
                </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}

export default StatusContent;
