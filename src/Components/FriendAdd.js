import React, { Component } from 'react';
import friendAdd from '../HinhAnh/FriendIcon.png'
import NgoLanHuong3 from '../HinhAnh/NgoLanHuong3.jpg'
import KhanhVy3 from '../HinhAnh/KhanhVy3.jpg'

class FriendAdd extends Component {



    render() {
        var friendAddArray = [
            {
                image: NgoLanHuong3,
                name: "Ngô Lan Hương"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            },
            {
                image: KhanhVy3,
                name: "Khánh Vy"
            }
        ];
        let friendAddElement = friendAddArray.map((friendAddArray, index) => {
            return (

                <li key={index} style={{ width: "100%" }}>
                    <hr></hr>
                    <img src={friendAddArray.image}
                        className="img-responsive" alt="Image1"
                        style={{
                            float: "left", borderRadius: "50%", width: "48px", height: "48px",
                        }} />
                    <div style={{ textAlign: "right" }}>
                        <a href="# " className="nameFriendAdd">
                            {friendAddArray.name}</a>
                        <form onSubmit={(e)=> e.preventDefault()}>
                            <button type="submit" className="btn btn-info btnfriendAdd" >Xác nhận</button>
                             &nbsp;
                            <button type="cancel" className="btn btn-default btnHuyAdd">Huỷ</button>
                        </form>
                    </div>
                </li>)
        });
        return (
            <li>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle friendHeader"
                        type="button" data-toggle="dropdown"
                    >
                        {/* #0055a8 */}
                        <img
                            src={friendAdd}
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
                            {friendAddElement}
                            <li className="liAllRequest">
                                <a href="# " className="AllFriendRequest">Xem tất cả</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </li>
        );
    }
}

export default FriendAdd;
