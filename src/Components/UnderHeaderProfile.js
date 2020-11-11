import StatusContent from '../Components/StatusContent.js'
import React, { Component } from 'react';
import ContentStatusNoImg from '../Components/ContentStatusNoImg.js';
import Cover from '../HinhAnh/cover.jpg'
import PublicImage from "../HinhAnh/Public.png";
import NgoLanHuong2 from '../HinhAnh/NgoLanHuong2.jpg'
import KhanhVy3 from '../HinhAnh/NgoLanHuong1.jpg'
import Avatar from '../HinhAnh/NgoLanHuong3.jpg'
class UnderHeaderProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            account: "Ngô Lan Hương",
            friend: 456,
            ThemAnhBia: "",
            chinhsuaProfile: "",
            coverLinkNew: "",
            coverDefault: true,
            coverChanging: false,
            changeAvatar: false,
        }
    }
    onHandleHover = () => {
        this.setState({
            ThemAnhBia: "Thêm ảnh bìa"
        })
    }
    onHandleHoverChange = () => {
        this.setState({
            chinhsuaProfile: "Chỉnh sửa trang cá nhân"
        })
    }
    onHandleLeave = () => {
        this.setState({
            ThemAnhBia: ""
        })
    }
    onHandleLeaveChange = () => {
        this.setState({
            chinhsuaProfile: ""
        })
    }
    handleChangeFile = (event) => {
        this.setState({
            coverLinkNew: URL.createObjectURL(event.target.files[0]),
            coverDefault: false,
            ThemAnhBia: "",
            coverChanging: true,
        })
    }
    onHadleCancelCover = () => {
        this.setState({ coverDefault: true, coverLinkNew: "", coverChanging: false })
    }
    render() {
        var product = [{  //giai pháp thay thế hiển thị do chưa có gọi api
            id: 1,
            name: "Ngô Lan Hương",
            srcCaption: NgoLanHuong2,
            srcAVT: Avatar,
            caption: "Thả cái tym trước khi đi chơi nè ♥"
        },
        {
            id: 2,
            name: "Ngô Lan Hương",
            srcAVT: Avatar,
            srcCaption: KhanhVy3,
            caption: "Đây là caption của cái status này"
        },]
        let elements = product.map((product, index) => {
            return <ContentStatusNoImg key={index}
                name={product.name} textid={"textCmt" + product.id}
                srcAVT={product.srcAVT} caption={product.caption}
                 srcCaption={product.srcCaption} />
        })
        return (
            <div className="container mainwallProfile">
                <form onSubmit={(e) => e.preventDefault()} >
                    <div>
                        <div className="Facebook-timelineSection">
                            <div className="CoverProfile">

                                {!this.state.coverChanging && <button type="button" className="btn btn-default btnAddCover"
                                    onMouseEnter={this.onHandleHover}
                                    onMouseLeave={this.onHandleLeave}
                                    onClick={() => document.getElementById("FileBrowser1").click()}
                                >
                                    {this.state.ThemAnhBia}
                                </button>}
                                <input type="file" id="FileBrowser1"
                                    style={{ display: "none" }}
                                    onChange={this.handleChangeFile}
                                />
                                <img src=
                                    {this.state.coverDefault ? Cover : this.state.coverLinkNew}
                                    className="img-responsive imgCover CoverProfile " alt="Image1" />
                                {this.state.coverDefault &&
                                    <div >
                                        <p style={{ background: "mediumpurple" }} className="NameAccount">{this.state.account}</p>
                                        <a role="button" href="/updateinfo"className="btn btn-large btn-block btn-default btnSettingINFO"
                                            onMouseEnter={this.onHandleHoverChange}
                                            onMouseLeave={this.onHandleLeaveChange}
                                        >
                                            <span className="glyphicon glyphicon-pencil" style={{ fontSize: "15px" }}></span>
                                            &nbsp;
                                            <strong style={{
                                                textDecoration: "underline"
                                            }}>{this.state.chinhsuaProfile} </strong>
                                        </a>
                                    </div>
                                }


                            </div>

                            <div className="avatarProFilePage"
                                onMouseEnter={() => this.setState({
                                    changeAvatar: true,
                                })}
                                onMouseLeave={() => this.setState({
                                    changeAvatar: false,
                                })}>
                                <img src={Avatar} className="img-responsive avatarProfile "
                                    alt="Image1"
                                    style={{ borderRadius: "100%" }}

                                />
                                {this.state.changeAvatar && <div>
                                    <a role="button" href="#     "
                                        className="btn btn-default btnChangeAva"
                                        onClick={() => document.getElementById("fileAvatar").click()}>
                                        <i className="fas fa-camera iconChangeAva"></i>
                                        <br /> Cập nhật
                                    </a>
                                    <input type="file" style={{ display: "none" }} id="fileAvatar" />
                                </div>}
                            </div>

                            <div className="navbar NAVinTimeline">
                                <ul className="nav navbar-nav" >
                                    {(!this.state.coverChanging) && <li>
                                        <a href="# " className="tagAinTimeLine"><strong>Dòng thời gian</strong></a>
                                    </li>}
                                    {(!this.state.coverChanging) && <li>
                                        <a href="# " className="tagAinTimeLine"><strong>Giới thiệu</strong></a>
                                    </li>}
                                    {(!this.state.coverChanging) && <li>
                                        <a href="# " className="tagAinTimeLine"><strong>Bạn bè </strong> {this.state.friend}</a>
                                    </li>}
                                    {(!this.state.coverChanging) && <li>
                                        <a href="# " className="tagAinTimeLine"><strong>Ảnh</strong></a>
                                    </li>}
                                    {(!this.state.coverChanging) && <li>
                                        <a href="# " className="tagAinTimeLine"><strong>Check In</strong></a>
                                    </li>}
                                    {(!this.state.coverChanging) && <li>
                                        <a href="# " className="tagAinTimeLine tagVideoTimeline"><strong>Video</strong></a>
                                    </li>}

                                </ul>
                                {(this.state.coverChanging) &&
                                    <div className="container-fluid divBTNSaveCover">
                                        <button type="submit" className="btn btnSaveCover"
                                            onClick={() => this.setState({ coverChanging: false })}
                                        >
                                            <strong> Lưu thay đổi </strong>
                                        </button>
                                        <button type="cancel"
                                            onClick={
                                                this.onHadleCancelCover
                                            }
                                            className="btn btnSaveCover btnHuyCover"
                                        >
                                            <strong> Huỷ </strong>
                                        </button>
                                        <span className="btnSaveCover lblCongKhaiCover">
                                            <strong>Công khai</strong>
                                        </span>
                                    </div>
                                }
                            </div>

                        </div>

                    </div>

                </form>

                <br />

                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="row row1Intro ">
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 divImageIntroHeader">
                                <img src={PublicImage} className="img-responsive imageIntro" alt="Image1" />
                            </div>
                            <p>
                                Giới thiệu
                             </p>
                            <p style={{ paddingLeft: "15px" }}> Đây là tên.</p>
                            <p style={{ paddingLeft: "15px" }}> Đây là Email.</p>
                            <p style={{ paddingLeft: "15px" }}> Đây là Sđt.</p>
                            <p style={{ paddingLeft: "15px" }}> Đây là Giới tính.</p>
                            <p style={{ paddingLeft: "15px" }}> Đây là đến từ đâu.</p>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <StatusContent name={"Hương"}   />
                        { elements}

                    </div>
                </div>

                {/* <div>
                    <div style={{ width: "68%", float: "right" }}>
                    </div>
                    <div className="divIntro">
                        


                    </div>
                </div> */}

                <br />
            </div >


        );
    }
}

export default UnderHeaderProfile;
