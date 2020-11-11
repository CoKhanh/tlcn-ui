import React, { Component } from 'react';
import '../App.css';
import HeaderNF from '../Components/HeaderNF.js';
import ContentStatusNoImg from '../Components/ContentStatusNoImg.js';
import StatusContent from '../Components/StatusContent.js'
import NgoLanHuong3 from '../HinhAnh/NgoLanHuong3.jpg'
import NgoLanHuong2 from '../HinhAnh/NgoLanHuong2.jpg'
import KhanhVy3 from '../HinhAnh/KhanhVy3.jpg'
import KhanhVy1 from '../HinhAnh/KhanhVy1.jpg'

class Newsfeed extends Component {
    render() {
        var product = [{  //giai pháp thay thế hiển thị do chưa có gọi api
            id: 1,
            name: "Ngô Lan Hương",
            srcCaption: NgoLanHuong2,
            srcAVT: NgoLanHuong3,
            caption: "Thả cái tym trước khi đi chơi nè ♥"
        },
        {
            id: 2,
            name: "Khánh Vy",
            srcAVT: KhanhVy1,
            srcCaption: KhanhVy3,
            caption: "Đây là caption của cái status này"
        },]
        // for (var i = 1; i <= 2; i++) {
        //     product.push("textCmt" + i)
        // }
        let elements = product.map((product, index) => {
            return <ContentStatusNoImg key={index}
                name={product.name} textid={"textCmt" + product.id}
                srcAVT={product.srcAVT} caption={product.caption} srcCaption={product.srcCaption} />
        })
        return (
            <div>
                <div className="container DashBarNAV" align="left">
                </div>
                <HeaderNF />
                {/* <div className="container Newsfeed"> */}
                <div className="container mainWall">
                    <div className="createSTT">
                        <StatusContent name={"Hương"} marginLeft="22%" />
                    </div>
                    <br />
                    {elements}
                </div>

            </div>


        );
    }
}

export default Newsfeed;
