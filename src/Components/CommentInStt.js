import React, { Component } from 'react'
// import TextareaAutosize from 'react-textarea-autosize';
import NgoLanHuong1 from "../HinhAnh/NgoLanHuong1.jpg"
class CommentInStt extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div className="container-fluid InfoCaption"> {/*  Khung chứa thông tin người đăng caption */}
                <div className="col-sm-1 ImgHeadingSTT">
                </div>
                <img
                    src={NgoLanHuong1}
                    width="40px"
                    height="40px"
                    className="ImageProfile"
                    alt="facebook Profile Image1" style={{ float: "left" }} />
                <div className="col-sm-4 InfoComment txtCmt"
                    style={{ marginLeft: "5px", height: "100%", width: "88%" }}>
                    <span>
                        <a href="# " style={{ fontWeight: "600" }}>
                            {this.props.UserName}
                        </a>
                        &nbsp;
                        <span>
                            <span>
                                <span style={{ fontSize: "16px" }}>
                                    {this.props.comment}
                                    {/* <TextareaAutosize className="form-control txtCmt"  value={this.props.comment} readOnly/> */}
                                </span>
                            </span>
                        </span>
                    </span>

                </div>
            </div>
        );
    }
}
export default CommentInStt;