import React, { Component } from 'react'
import fbLikeIcon from "../HinhAnh/fbLikeIcon.png";
import fbCmtIcon from "../HinhAnh/fbCmtIcon.png";
import fbShareIcon from "../HinhAnh/fbShareIcon.png";
import NgoLanHuong1 from "../HinhAnh/NgoLanHuong1.jpg"
import fbLikeBlue from "../HinhAnh/fbLikeBlue.png"
import CommentInStt from './CommentInStt.js'
class DivHaveCLS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: fbLikeIcon,
            className: "h5-btnLike",
            checkLike: false,//Chua like
            txtCMT: "",
            showHidenComment: false
        }
    }
    Like = () => {
        if (this.state.checkLike === false) {
            this.setState({
                src: fbLikeBlue,
                className: "h5-btnLiked",
                checkLike: true // da like
            })
        }
        else {
            this.setState({
                src: fbLikeIcon,
                className: "h5-btnLike",
                checkLike: false

            })

        }

    }

    getfocus =() => {
        document.getElementById(this.props.textid).focus();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        return (<CommentInStt comment={this.state.txtCMT} />);
    }

    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            var target = e.target;
            var name = target.name;
            var value = target.value;
            this.setState({
                [name]: value,
                showHidenComment: true
            });
            document.getElementById(this.props.textid).value = '';
        }
    }
    render() {
        var userCmt = [
            {
                userId: 1,
                username: "cơ khánh",
                cmt_content: "Xin chào, tôi tên là Cơ Khánh và tôi đến từ TPHCM"
            },
            {
                userId: 2,
                username: "Ngô Lan Hương",
                cmt_content: "Xin chào, tôi tên Hương và tôi đến từ Hà Nội"
            },
            {
                userId: 3,
                username: "Tường Khải",
                cmt_content: "xin chào, tôi tên Khải và tôi đến từ Đà Nẵng"
            }
        ];
        let element = userCmt.map((userCmt, index) => {
            return (
                <div key={index}>
                    <br/>
                    <CommentInStt UserName={userCmt.username} comment={userCmt.cmt_content}  />
                </div>)
        });

        return (
            <div>
                <div className="KhungChuaLCS">
                    <button type="button" className="btn btnLike" onClick={() => this.Like()} >
                        <h5 className={this.state.className}>
                            <img src={this.state.src} alt="Like" width="10%" height="10%" />
                                    Thích
                                </h5>
                    </button>
                    <button type="button" className="btn btnCmt" onClick={() => this.getfocus()} >
                        <h5 className="h5-btnCmt" >
                            <img src={fbCmtIcon} alt="Like" width="10%" height="10%" />
                                    Bình luận
                                </h5>
                    </button>
                    <button type="button" className="btn btnShare" >
                        <h5 className="h5-btnShare">
                            <img src={fbShareIcon} alt="Like" width="10%" height="10%" />
                                    Chia sẻ
                                </h5>
                    </button >
                </div>
                {element}   
                
                {this.state.showHidenComment && <div><br/> <CommentInStt UserName={this.props.name} comment={this.state.txtCMT}/></div>}
                <br/>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div className="container-fluid InfoCaption"> {/*  Khung chứa thông tin người đăng caption */}
                        <div className="col-sm-1 imgOfInfo">
                            <img
                                src={NgoLanHuong1}
                                width="40px"
                                height="40px"
                                className="ImageProfile "
                                alt="facebook Profile Image1" />
                        </div>
                        <div className="col-sm-11 NameAndStatus">
                            <input type="text" id={this.props.textid}
                                name="txtCMT"
                                className="form-control txtCmt"
                                placeholder="Viết bình luận"
                                onKeyDown={this.onKeyDown}
                            />

                        </div>

                    </div>
                </form>

            </div>
        );
    }
}
export default DivHaveCLS;