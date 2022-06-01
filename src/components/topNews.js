
import {CommentOutlined } from "@ant-design/icons";

const TopNews = () => {
    return (
        <>
            <div className="topnews">
                <div className="grid width">
                    <div className="row">
                        <div className="col col-left l-10">
                            <div className="top-wrapper">
                                <article className="article-news">
                                    <div className="article-image">
                                        <a href='/' className="article-link article-paddingTop">
                                            <img srcSet="https://i1-thethao.vnecdn.net/2022/06/01/58f6be2fd1d3423f82fa3dd6217a09-8024-1268-1654043803.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=rTXCGU-ZkaRMmtfY4JgpQA" alt="error"/>
                                        </a>
                                    </div>
                                    <div className="article-content">
                                        <a href="/" className="article-title">
                                            Nadal hạ Djokovic ở tứ kết Roland Garros
                                        </a>
                                        <p className="article-des">
                                            <strong>PHÁP</strong>&nbsp; 
                                        </p>
                                        <p className='article-des--text'>Rafael Nadal biến Novak Djokovic thành cựu vô địch Roland Garros, khi thắng kình địch Serbia 6-2, 4-6, 6-2, 7-6(4) ở tứ kết hôm 31/5.</p>
                                        <p className="article-source">
                                            <a href="/">Thể thao</a>
                                        </p>
                                    </div>
                                </article>
                                <div className="sub-top-news">
                                    <div className="sub-content">
                                        <ul className="sub-list">
                                            <div className="row">
                                                <li className="sub-item l-4 col">
                                                    <h3 className="sub-title">
                                                        <a href="/" className="sub-link">
                                                            Bức tranh điện hạt nhân trên toàn cầu
                                                        </a>
                                                    </h3>
                                                        <p className="sub-des">
                                                            Philippines muốn hồi sinh nhà
                                                            máy điện hạt nhân sau vài thập kỷ,
                                                            Pháp sắp xây thêm lò phản ứng, còn Đức kiên quyết đóng hết nhà máy năm nay.
                                                        </p>
                                                        <span className="sub-comment" style={{marginTop: '10px'}}>
                                                            <CommentOutlined style={{fontSize: '20px', color: "#A0A0A0"}} />
                                                            <span style={{marginLeft: "5px", color: "#4090EF", fontSize: "12px"}} className="comment-widget">38</span>
                                                        </span>
                                                </li>
                                                <li className="sub-item l-4 col">
                                                    <h3 className="sub-title">
                                                        <a href="/" className="sub-link">
                                                        Thổ Nhĩ Kỳ - đồng minh khiến NATO đau đầu
                                                        </a>
                                                    </h3>
                                                        <p className="sub-des">
                                                        Khi Tổng thống Thổ Nhĩ Kỳ đe dọa ngăn Thụy Điển và Phần Lan gia nhập NATO, các quan chức phương Tây phẫn nộ nhưng không bất ngờ.
                                                        </p>
                                                        <span className="sub-comment" style={{marginTop: '10px'}}>
                                                            <CommentOutlined style={{fontSize: '20px', color: "#A0A0A0"}} />
                                                            <span style={{marginLeft: "5px", color: "#4090EF", fontSize: "12px"}} className="comment-widget">38</span>
                                                        </span>
                                                </li>
                                                <li className="sub-item l-4 col">
                                                    <h3 className="sub-title">
                                                        <a href="/" className="sub-link">
                                                        Người Uzbekistan vẫn nhớ tuyệt phẩm 'cầu vồng tuyết' của Quang Hải
                                                        </a>
                                                    </h3>
                                                        <p className="sub-des">
                                                        Bàn gỡ của Nguyễn Quang Hải trong trận chung kết U23 châu Á 2018 còn nguyên ấn tượng với nhiều người Uzbekistan, trong đó có thành viên Uỷ ban Olympic
                                                        </p>
                                                        <span className="sub-comment" style={{marginTop: '10px'}}>
                                                            <CommentOutlined style={{fontSize: '20px', color: "#A0A0A0"}} />
                                                            <span style={{marginLeft: "5px", color: "#4090EF", fontSize: "12px"}} className="comment-widget">38</span>
                                                        </span>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-right-ad l-2">
                           <div className="promotion-wrapper">
                               <a href="https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvvU-_5paI8d0_0173-HyR3pKzkJjrDNbq-Ni2rd5yWTGJLG-ZoQcWRCoALYbic7XAofBWTsSj8X4HNdseH9CiZoXq42khCsdOyBskex4SbvQnGSv7PLMeeY7TgTp7VDBnJ4mEduM5Ue-zPoUdHxMVZ30YpZN89li3iLcDFvdvHINJ4G3B2dDvJ1RYSlwu-0o9XhwLaa5vOTTQ3T4tFErxi3qH9DElXrFMX2bnKHnjaGjpQ3HrJSgiOUrF5itCaoYGX18cSA0y9ml1YPsuKbEF3sGRYSwvYjxhPOM_5G_55MjpaDOcnxajakd3hTKJ6EZ2oTg&sig=Cg0ArKJSzAE06nJhhAOSEAE&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl=https%3A%2F%2Fvm.vnexpress.net%2Fquy-nhon-2022%2Fdang-ky-kun%3Futm_source%3DVnExpress%26utm_medium%3DBanner%26utm_campaign%3DKun_QuyNhon2022_300x500%26utm_content%3DVMH2022" className="promotion-link">

                               </a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNews;