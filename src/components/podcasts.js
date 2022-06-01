import NewsItem from "./shareComponents/newsItem";

const Podcasts = () => {
    return (
        <>
            <div className="main-podcast">
                <div className="podcast-container padding grid width">
                    <div className="row">
                        <div className="col l-12">
                            <ul className="podcast-list">
                                <li className="podcast-item">
                                    <a href="/" className="podcast-link">
                                        Podcasts
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-4 border-right">
                            <NewsItem 
                                title={"Học sinh mông lung dù được hướng nghiệp"}
                                image={"https://i1-vnexpress.vnecdn.net/2022/06/01/afpcom20220125partners068AA250-6723-2763-1654060372.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=nk3MzIGrdjM3mEDwskHSmw"}
                                des={"Xác định được sở thích của mình nhưng Duyên vẫn mông lung với ngành mình chọn bởi số buổi hướng..."}
                            />
                        </div>
                        <div className="col l-4 border-right">
                        <NewsItem 
                                title={"Điểm tin 23h: Xem xét giảm thời gian"}
                                image={"https://i1-vnexpress.vnecdn.net/2022/05/30/lamcccd-vnexpress11-1615353798-5285-3558-1653879909.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=9xaxEwZU3DZ3oBhTgsk7Rw"}
                                des={"Việt Nam hạ Afghanistan nhờ cú đúp của Tuấn Hải; Đại biểu Quốc hội đề nghị giảm tiếp thuế để kìm giá..."}
                            />
                        </div>
                        <div className="col l-4">
                        <NewsItem 
                                title={"Đội lốt đại gia, lừa đảo 10 triệu USD qua Tinder"}
                                image={"https://i1-thethao.vnecdn.net/2022/06/01/2-1654048767-2767-1654048832.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=2G_B9qUd_Q4CBdIfmrFlBg"}
                                des={"Giả danh là con trai tỷ phú kim cương, Simon Leviev hẹn hò với nhiều phụ nữ trên Tinder, hắn bịa..."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Podcasts;