import React from "react"
import Form from "../contact/Form"
import TableNG from "./tableNG"
import Layout from "../../components/layout"

import "./newGraduate.scss"


const NewGraduate = () => {


    return (
      <Layout>
        <div className="newmapping">
            <div className="newheader">
                <h1 className="newmappingh1">新卒採用</h1>
                <p className="newmappingp">Recruit</p>
            </div>
            <div>
                <h5 className="sTitle">新卒採用について</h5>
                <p className="center1">現在、2023年度の募集を行っております。</p>
            </div>
            <div>
                <h5 className="sTitle">募集要項</h5>
            </div>
            <TableNG />
            <div>
                <h5 className="sTitle">採用フロー</h5>
                <div>
                    <h6 className="ssTitle">エントリー</h6>
                    <p className="text">（株）MS総合研究所にご興味をお持ち頂きました方は、お電話や応募フォームにて直接お問い合わせ下さい。
                    {/* 下記、マイナビからも応募が可能です。 */}
                    </p>
                    <div className="text">
                      {/* <a href="https://job.mynavi.jp/21/pc/search/corp237340/outline.html">
                        <img src={ mynavi } width="200px" height="60px" alt=""/>
                      </a> */}
                    </div>
                </div>
                <div>
                    <h6 className="ssTitle">会社説明会兼一次選考会</h6>
                    <p className="text">これからＩＴ業界を目指す方・興味を持ち始めた方も是非ご応募ください！希望者にはそのまま一次選考（筆記試験・面接）も受けていただくことが可能です。</p>
                </div>
                <div>
                    <h6 className="ssTitle">最終選考</h6>
                    <p className="text">個人面接を受けていただきます。</p>
                </div>
                <div>
                    <h6 className="ssTitle">内定</h6>
                    <p className="text">内定までは、2週間前後を予定しています。</p>
                </div>
                <div>
                    <h6 className="ssTitle">持ち物</h6>
                    <p className="text">筆記用具、写真付履歴書、卒業見込証明書、成績証明書、健康診断証明書</p>
                </div>
            </div>
            <div>
                <h5 className="sTitle">応募フォーム</h5>
            </div>
            <Form />
            <br />
        </div>
      </Layout>
    )
}

export default NewGraduate;