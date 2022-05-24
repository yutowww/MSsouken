import React from "react"
import Mapping from "./map"

import "./access.scss"
import Layout from "../../components/layout"
import access from "../../images/force/access_fullsize.jpg"


const Access =()=>{
    return (
        <Layout>
            <div>
                <div className="heading">
                    <img src={ access } className="img-fluid" alt=""/>
                    <p>アクセス</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Mapping />
                        </div>
                        <div className="col-sm">
                            <h5 className="acTitle">最寄駅</h5>
                            <div className="#2196F3box">
                                <p className="paddingTop">東西線/竹橋駅<span>（3b出口[KKRホテル側]より徒歩3分）</span></p>
                                <p>半蔵門線・新宿線・三田線/神保町駅<span>（A9出口から、徒歩5分）</span></p>
                            </div>
                            <h5 className="acTitle">住所</h5>
                            <div className="#2196F3box">
                                <p className="paddingTop">〒101-0054<br />
                                    <span>千代田区神田錦町三丁目18番地 寿ビル7階</span>
                                    <span>（データウェアネットワーク株式会社 社内）</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Access;