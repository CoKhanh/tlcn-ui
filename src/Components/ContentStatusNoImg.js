import React, { Component } from "react";
import PublicImage from "../HinhAnh/Public.png";
import FriendIcon from "../HinhAnh/FriendIcon.png";
import PrivateICon from "../HinhAnh/PrivateICon.png";
import dropdownIcon from '../HinhAnh/sort_down.png'
import DivHaveLCS from './DivHaveLCS.js'
class ContentStatusNoImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            src: PublicImage,
            alt: "PublicIcon",
            class: "PublicImageIcon",
        };
    }
    setStatePrivate = () => {
        this.setState({
            src: PrivateICon,
            alt: "PrivateIcon",
            class: "PrivateImageIcon",
        });
    };
    setStatePublic = () => {
        this.setState({
            src: PublicImage,
            alt: "PublicIcon",
            class: "PublicImageIcon",
        });
    };
    setStateFriend = () => {
        this.setState({
            src: FriendIcon,
            alt: "FriendIcon",
            class: "FriendImageIcon",
        });
    };
    CheckImgFromdb(src) {
        if (src === "") {
            return null;
        }
        else return (
            <img src={src} alt="Hình ảnh" style={{ width: "100%", height: "100%" }} />
        );
    }

    render() {
        // const style = {
        //     padding: '0 2px 5px 2px', //top right bot left  
        //     width: '100%'
        // }
        const styleBtnStatus = {
            width: '26px',
            paddingBottom: '2px'
        }

        return (
            <div className="panel panel-default" >
                <div className="panel-body bodyPanel" >
                    <div >
                        <div className="container-fluid InfoCaption"> {/*  Khung chứa thông tin người đăng caption */}
                            <div className="col-sm-1 ImgHeadingSTT">
                                <img
                                    src={this.props.srcAVT}
                                    width="40px"
                                    height="40px"
                                    className="ImageProfile"
                                    alt="facebook Profile Image1" />
                            </div>
                            <div className="col-sm-4 NameAndStatus">
                                <span > </span>
                                <a href="# " >
                                    <strong> {this.props.name} </strong>
                                </a>
                                <span > </span>
                                <div>

                                    <span className="label lblTgianDang">15 phút</span>

                                    <div className="dropdown StatusofCaption" >
                                        <a id="TrangThaibtn" className="dropbtn sttBtnCapImg" href="# ">
                                            <div style={styleBtnStatus}>
                                                <img src={this.state.src} className={this.state.class} alt={this.state.alt} width="50%" />
                                                <img src={dropdownIcon} alt="dropdownIcon" width="50%" />
                                            </div>
                                        </a>
                                        <div className="dropdown-content StatusofCaptionContent" >
                                            <button type="button" className="btnPublic" onClick={() => this.setStatePublic()} >
                                                <img src={PublicImage} alt="Public" className="PublicImageIcon " width="17%" height="17%" />
                                                 Công khai
                                            </button>

                                            <button type="button" className="btnFriend" onClick={() => this.setStateFriend()} >
                                                <img src={FriendIcon}
                                                    alt="Friend"
                                                    className="FriendImageIcon "
                                                    width="17%"
                                                    height="17%" />Bạn bè
                                            </button>
                                            <button type="button" className="btnPrivate" onClick={() => this.setStatePrivate()}>
                                                <img src={PrivateICon} alt="Private" className="PrivateImageIcon " width="17%" height="17%" />
                                         Chỉ mình tôi
                                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <p>{this.props.caption}</p>
                            <div className="img-container" style={{ width: "100%", height: "100%" }}>
                                {this.CheckImgFromdb(this.props.srcCaption)}
                            </div>

                        </div>
                    </div>
                    <hr />
                    <DivHaveLCS name={this.props.name} textid={this.props.textid} />
                    <hr />

                </div>
            </div>

        );
    }
}

export default ContentStatusNoImg;