import React from "react"
import ContactImage from "../../images/force/contact_fullsize.jpg"
import Layout from "../../components/layout"

import "./privacypolicy.scss"

const PrivacyPolicy = () => {

    return (
        <Layout>
            <div>
                <div className="heading">
                    <img src={ ContactImage } className="img-fluid" alt=""/>
                    <p>プライバシーポリシー</p>
                </div>
                <div className="container mt-5 contents">
                    <div className="PPtext">
                        <p>
                            フォース株式会社（以下、当社といいます。）のウェブサイト上のお問い合わせ入力フォームまたは電子メールを通して、
                            お客様または採用応募者の方（以下、ご利用者）から当社が提供を受けた個人情報は、本個人情報保護ポリシーにしたがい取り扱います。
                        </p>
                        <p>
                            当社は、ご利用者の方の個人情報を取得、保有、使用、開示する場合において、当該ご利用者の方の権利利益を損なうことの無いよう努めます。
                        </p>
                        <p>
                            通常、ご利用者の方は、個人情報を開示することなく当社のウェブサイトを訪れることができ、
                            ウェブサイトを参照しただけでは、ご利用者の方の個人情報が収集されることはありません。
                        </p>
                        <p>
                            当社は、取得したご利用者の方の個人情報について、適切な安全措置を講じることにより、
                            ご利用者の方の個人情報の漏えい、紛失、き損又はご利用者の方の個人情報への不正なアクセスを防止することに努めます。
                        </p>
                        <p>
                            当社は、ご利用者の方の個人情報を次の各号の目的の達成に必要な範囲でのみ使用いたします。
                        </p>
                        <p className="font-weight-bold">
                            ご利用者の方と当社との間で締結した契約の履行 ご利用者の方に対する催物等開催のご案内の送付
                        </p>
                        <p>
                            当社は、あらかじめご利用者の方の事前の同意を得た場合を除き、お客様の個人情報を第三者に提供いたしません。
                            ただし、次の各号に該当する場合は、ご利用者の方の事前の同意を得ることなく、ご利用者の方の個人情報を第三者に提供することがあります。
                        </p>
                        <p>
                            リクルートに関する応募の場合履歴書および業務経歴書の送付をもって、ご利用者の方の事前の同意を得たものといたします。
                        </p>
                        <p className="font-weight-bold">
                            法令の定めに基づく場合
                        </p>
                        <p className="font-weight-bold">
                            人の生命、身体又は財産の保護のために必要であって、ご利用者の方の同意を得ることが困難である場合
                        </p>
                        <p className="font-weight-bold">
                            国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、
                            ご利用者の方の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
                        </p>
                        <p>
                            個々のコンテンツにおいて、個別に個人情報保護ポリシーが示されている場合、またはそれを示すコンテンツにリンクしている場合には、当該個人情報保護ポリシーが優先されます。
                        </p>
                        <p>
                            当社は、ご利用者の方の個人情報の取扱いに関係する法令その他の規範を遵守するとともに、本個人情報保護ポリシーの内容を継続的に見直し、改善に努めます。
                        </p>
                    </div>
                </div>
                <div className="container mt-5 bottom-contents">
                    <p>
                        お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで
                    </p>
                    <p>9:30～18:30</p>
                    <p>TEL 03-5259-5231</p>
                </div>
            </div>
        </Layout>
    )
}

export default PrivacyPolicy