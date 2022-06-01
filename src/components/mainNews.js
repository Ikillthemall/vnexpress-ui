import NewsItem from "./shareComponents/newsItem";
import ContentBoxCates from "./shareComponents/contentBoxCates";
import {RiseOutlined} from "@ant-design/icons";

const MainNews = () => {
    return (
        <>
            <div className="main-news">     
                <div className="news-container grid width">
                    <div className="row">
                        <div className="col l-4 news-padding">
                            <NewsItem 
                                title={"Thổ Nhĩ Kỳ - đồng minh khiến NATO đau đầu"}
                                image={"https://i1-vnexpress.vnecdn.net/2022/05/31/erdogan-23-5-afp-1653973475-7971-1653973693.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=W5qMEIVKdPD1eS_yAYhvRQ"}
                                des={"Khi Tổng thống Thổ Nhĩ Kỳ đe dọa ngăn Thụy Điển và Phần Lan gia nhập NATO, các quan chức phương Tây phẫn nộ nhưng không bất ngờ."}
                                border="news-border-bottom"
                            />
                            <NewsItem 
                                title={"Ngày 20/6, tòa xét kháng cáo của ông Nguyễn Đức Chung"}
                                image={"https://i1-vnexpress.vnecdn.net/2022/06/01/ong-nguyen-duc-chung-jpg-4703-4995-9528-1654052145.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=zWIfem9gsj1bNaXQF3_hQg"}
                                des={"TAND Cấp cao sẽ xét kháng cáo kêu oan của cựu chủ tịch UBND Hà Nội Nguyễn Đức Chung trước cáo buộc công ty gia đình mua chế phẩm Redoxy-3C về bán cho thành phố."}
                                border="news-border-bottom"
                            />
                            <NewsItem 
                                title={"Djokovic: 'Nadal là nhà vô địch vĩ đại'"}
                                image={"https://i1-thethao.vnecdn.net/2022/06/01/2-1654048767-2767-1654048832.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=2G_B9qUd_Q4CBdIfmrFlBg"}
                                des={"Novak Djokovic thừa nhận bản thân mắc nhiều sai lầm, đồng thời ca ngợi đẳng cấp của Rafael Nadal sau trận tứ kết Roland Garros tối 31/5."}
                                border="news-border-bottom"
                            />
                            <NewsItem 
                                title={"Showbiz Việt đua kinh doanh bất động sản"}
                                image={"https://i1-kinhdoanh.vnecdn.net/2022/06/01/282634343-594823898444062-5495-3270-2863-1654059566.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=olVm8Eltcm-SdmeshBlu9A"}
                                des={"Trước đây giới showbiz Việt gia nhập ngành địa ốc như nghề tay trái, mua bán đơn lẻ, âm thầm còn nay họ đầu tư quy mô, rầm rộ hơn."}
                                border="news-border-bottom"
                            />
                            <div className="item-news item-news-common off-thumb">
                                <a href="https://vnexpress.net/topic/cang-thang-nga-ukraine-25857" data-itm-source="#vn_source=Home&amp;vn_campaign=Banner-NgaTanCongUkraina&amp;vn_medium=Item-0&amp;vn_term=Desktop" title="Căng thẳng biên giới Ukraine - Nga" data-itm-added="1">
                                <img alt="RUSSIA" src="https://s1.vnecdn.net/vnexpress/restruct/i/v608/v2_2019/pc/graphics/Nga-Ukraine-Pc.jpg" />
                                </a>
                            </div>
                            <NewsItem 
                                title={"Chính sách nổi bật có hiệu lực từ tháng 6"}
                                image={"https://i1-vnexpress.vnecdn.net/2022/05/30/lamcccd-vnexpress11-1615353798-5285-3558-1653879909.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=9xaxEwZU3DZ3oBhTgsk7Rw"}
                                des={"Dừng thu phí thủ công cao tốc Hà Nội - Hải Phòng, cấp hộ chiếu online, hạn cuối giảm lệ phí làm căn cước công dân gắn chip là những chính sách có hiệu lực trong tháng 6."}
                                border="news-border-bottom"
                            />
                            <NewsItem 
                                title={"Cháy tại công ty gạch men"}
                                image={"https://i1-vnexpress.vnecdn.net/2022/06/01/282135975125351360205540611749-9444-8579-1654055626.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=Z5RgSUCGuY8jxkOkO-zIYw"}
                                des={"Cột khói cao hàng chục mét bao trùm nhà xưởng rộng hơn 10.000 m2 của Công ty Cổ phần Gạch men TASA tại TP Việt Trì, sáng 1/6."}
                                border="news-border-bottom"
                            />
                            <NewsItem 
                                title={"Phan Hiển: 'Tôi mong làm lễ cưới với Khánh Thi'"}
                                image={"https://i1-giaitri.vnecdn.net/2022/06/01/khanhthitop-1654067610-9014-1654068581.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=_K_U4eHomG9oPE0rR-MUVw"}
                                des={"Phan Hiển nói muốn Khánh Thi mặc váy cô dâu bước vào lễ đường, sau 12 năm cả hai chung sống."}
                                border="news-border-bottom"
                            />
                            <NewsItem 
                                title={"HLV Worrawoot nhắc lại chiến thắng 3-0 trước U23 Việt Nam'"}
                                image={"https://i1-thethao.vnecdn.net/2022/06/01/f2e75bd2f7ef37b16efe-165406727-5682-1915-1654067419.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=ME-PDgDFj8lh5Tc01vOaKg"}
                                des={"HLV Worrawoot Srimaka muốn U23 Thái Lan tái hiện chiến thắng áp đảo trước U23 Việt Nam ở SEA Games 2017, khi gặp lại nhau ở giải U23 châu Á."}
                                border="news-border-bottom"
                            />
                            <NewsItem 
                                title={"Tổng thống Croatia chỉ trích lệnh trừng phạt Nga'"}
                                image={"https://i1-vnexpress.vnecdn.net/2022/06/01/afpcom20220125partners068AA250-6723-2763-1654060372.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=nk3MzIGrdjM3mEDwskHSmw"}
                                des={"Tổng thống Croatia Milanovic cho rằng người dân châu Âu đang phải trả giá vì các lệnh trừng phạt không có tác dụng với Nga. "}
                                border="news-border-bottom"
                            />
                        </div>
                        <div className="col l-8 col-right">
                            <div className="box-cates">
                                <div className="box-wrapper">
                                    <div className="box-title-cates">
                                        <ul className="group-cates">
                                                        <li className="item-cate item-cate-home">
                                                            <a href="/" className="cate-link cate-link-home">
                                                                Kinh doanh
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Quốc tế
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Doanh nghiệp
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Chứng khoán
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Bất động sản
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Bảo hiểm
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                E-Commerce 4.0
                                                            </a>
                                                        </li>
                                        </ul>
                                    </div>
                                    <div className="box-content-cates">
                                            <ContentBoxCates
                                                title={"Gói phục hồi kinh tế 'thông qua nhanh, giải ngân lại quá chậm'"}
                                                image={"https://i1-kinhdoanh.vnecdn.net/2022/06/01/VuThiLuuMai-1654073760-2988-1654073982.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=JRNwuW6RrZ1oscstzjFpkw"}
                                                des={"Gói hỗ trợ phục hồi kinh tế giải ngân chậm, khiến các đại biểu Quốc hội sốt ruột vì có."}
                                                title2={"Nga cắt một phần khí đốt đến Đức, Đan Mạch"}
                                                des2={"Gazprom sẽ ngừng xuất khẩu khí đốt cho hai công ty năng lượng của Đức và Đan Mạch vì từ chối thanh toán bằng đồng ruble."}
                                                sub1={"Ấn Độ mua dầu Nga gấp 9 lần năm ngoái"}
                                                sub2={"Showbiz Việt đua kinh doanh bất động sản"}
                                                sub3={"Novaland nhận 250 triệu USD đầu tư từ nhóm Warburg Pincus"}
                                            />                             
                                    </div>
                                </div>
                            </div>
        
                            <div className="box-category box-tygia-vietllot has-bordered">
                                <div className="left box-left">
                                    <img
                                        src="https://s1.vnecdn.net/vnexpress/restruct/i/v608/banner/ebox_pc_560x160.jpg"
                                        alt="banner"
                                    />
                                </div>
                                <div className="right box-right">
                                <div className="box-giavang">
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                        <td>
                                            <a
                                            data-itm-source="#vn_source=Home&amp;vn_campaign=BoxGiaVang&amp;vn_medium=TitleGiaVang&amp;vn_term=Desktop"
                                            href="/chu-de/gia-vang-1403"
                                            title="Giá vàng"
                                            data-itm-added="1"
                                            >
                                            <strong>Giá vàng</strong>
                                            </a>
                                        </td>
                                        <td>Mua</td>
                                        <td>Bán</td>
                                        </tr>
                                        <tr>
                                        <td>Vàng SJC (triệu đồng/lượng)</td>
                                        <td>69,6</td>
                                        <td>70,3</td>
                                        </tr>
                                        <tr>
                                        <td>Thế giới (USD/ounce)</td>
                                        <td>1.862,7</td>
                                        <td>1.863,2</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                                <div className="box-link">
                                <a href="/">
                                    <img
                                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v589/banner/logo-startup.svg"
                                    alt="Startup"
                                    ></img>
                                </a>
                                <a href="/">
                                    <img
                                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v589/banner/logo-vhome.svg"
                                    alt="Vhome"
                                    ></img>
                                </a>
                                </div>
                            </div>
                            <div className="box-cates">
                                <div className="box-wrapper">
                                    <div className="box-title-cates">
                                            {/* <div className="row"> */}
                                                {/* <div className="col l-12"> */}
                                                    <ul className="group-cates">
                                                        <li className="item-cate item-cate-home">
                                                            <a href="/" className="cate-link cate-link-home">
                                                                Thể thao
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Bóng đá
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Lịch thi đấu
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Tennis
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                VM 2022
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                V-Race
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                V-Leauge
                                                            </a>
                                                        </li>
                                                    </ul>
                                                {/* </div> */}
                                            {/* </div> */}
                                    </div>
                                    <div className="box-content-cates">
                                        <ContentBoxCates
                                            title={"Việt Nam - Afghanistan: Quang Hải, Schmidt đá chính"}
                                            image={"https://i1-thethao.vnecdn.net/2022/06/01/ha-i-jpeg-1654074331-165407434-1738-9983-1654081763.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=esT6JWHOkchX6_nXtn8a_A"}
                                            des={" Việt Nam - Afghanistan: Quang Hải, Schmidt đá chính..."}
                                            title2={"Đội trưởng U23 Việt Nam không ngại nhân tố ngoại của Thái Lan"}
                                            des2={"Đánh giá cao những cầu thủ Thái Lan đang thi đấu ở châu Âu, nhưng Bùi Hoàng Việt Anh tự ... "}
                                            sub1={"Nadal - Djokovic là trận đấu lớn nhất lịch sử"}
                                            sub2={"Trợ lý U23 Thái Lan: 'Bằng mọi cách phải thắng U23 Việt Nam'"}
                                            sub3={"Việt Nam - Afghanistan: Chờ thử nghiệm từ thầy Park"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box-cates">
                                <div className="box-wrapper">
                                    <div className="box-title-cates">
                                            {/* <div className="row"> */}
                                                {/* <div className="col l-12"> */}
                                                    <ul className="group-cates">
                                                        <li className="item-cate item-cate-home">
                                                            <a href="/" className="cate-link cate-link-home">
                                                                Thể thao
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Bóng đá
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Lịch thi đấu
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Tennis
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                VM 2022
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                V-Race
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                V-Leauge
                                                            </a>
                                                        </li>
                                                    </ul>
                                                {/* </div> */}
                                            {/* </div> */}
                                    </div>
                                    <div className="box-content-cates">
                                        <ContentBoxCates
                                            title={"Việt Nam - Afghanistan: Quang Hải, Schmidt đá chính"}
                                            image={"https://i1-thethao.vnecdn.net/2022/06/01/ha-i-jpeg-1654074331-165407434-1738-9983-1654081763.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=esT6JWHOkchX6_nXtn8a_A"}
                                            des={" Việt Nam - Afghanistan: Quang Hải, Schmidt đá chính..."}
                                            title2={"Đội trưởng U23 Việt Nam không ngại nhân tố ngoại của Thái Lan"}
                                            des2={"Đánh giá cao những cầu thủ Thái Lan đang thi đấu ở châu Âu, nhưng Bùi Hoàng Việt Anh tự ... "}
                                            sub1={"Nadal - Djokovic là trận đấu lớn nhất lịch sử"}
                                            sub2={"Trợ lý U23 Thái Lan: 'Bằng mọi cách phải thắng U23 Việt Nam'"}
                                            sub3={"Việt Nam - Afghanistan: Chờ thử nghiệm từ thầy Park"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box-cates">
                                <div className="box-wrapper">
                                    <div className="box-title-cates">
                                        <ul className="group-cates">
                                                        <li className="item-cate item-cate-home">
                                                            <a href="/" className="cate-link cate-link-home">
                                                                Giải trí
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Chuyện sao
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Điện ảnh
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Thời trang
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Sách
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Làm đẹp
                                                            </a>
                                                        </li>
                                        </ul>
                                    </div>
                                    <div className="box-content-cates">
                                        <ContentBoxCates
                                            title={"Tòa hoãn phán quyết vụ kiện Depp - Heard"}
                                            image={"https://i1-giaitri.vnecdn.net/2022/06/01/2022-05-31t090639z-1-lynxmpei4-9146-1761-1654049839.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=fsgG_-mQpCXrXVQP7DVFmg"}
                                            des={" Thẩm phán kết thúc phiên thảo luận hôm 31/5 nhưng không đưa ra phán quyết cho vụ kiện Johnny Depp - Amber Heard."}
                                            title2={"Chồng cũ xin lỗi Từ Hy Viên"}
                                            des2={"Doanh nhân Uông Tiểu Phi xin lỗi Từ Hy Viên vì nói cô sử dụng thuốc cấm."}
                                            sub1={"BTS gặp tổng thống Biden"}
                                            sub2={"Dàn hoa hậu catwalk cùng mẫu nhí"}
                                            sub3={"Sách về trẻ thơ thời Covid-19 đoạt giải Dế Mèn"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box-cates">
                                <div className="box-wrapper">
                                    <div className="box-title-cates">
                                            {/* <div className="row"> */}
                                                {/* <div className="col l-12"> */}
                                                    <ul className="group-cates">
                                                        <li className="item-cate item-cate-home">
                                                            <a href="/" className="cate-link cate-link-home">
                                                                Khoa học
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Trong nước
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Phát minh
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Ứng dụng
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Thế giới tự nhiên
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Vũ trụ kì bí
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Khám phá thế giới
                                                            </a>
                                                        </li>
                                                    </ul>
                                                {/* </div> */}
                                            {/* </div> */}
                                    </div>
                                    <div className="box-content-cates">
                                        <ContentBoxCates
                                            title={"Thủ phạm khiến quái vật biển megalodon tuyệt chủng"}
                                            image={"https://i1-vnexpress.vnecdn.net/2022/06/01/CaptureJPG-1654058157-6715-1654058211.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=-rGYCbB3fLJiV_Nj4JWiSg"}
                                            des={"Cá mập quái vật megalodon với chiều dài 20 m có thể chịu sự cạnh tranh con mồi từ cá mập trắng nhỏ hơn, dẫn tới ... "}
                                            title2={"Cá mập quái vật megalodon với chiều dài 20 m có thể chịu sự cạnh tranh con mồi từ cá mập trắng nhỏ hơn, dẫn tới ... "}
                                            des2={"Nhà máy điện thủy triều - mặt trời đầu tiên của Trung Quốc chính thức hoạt động hôm 30/5, sản lượng ... "}
                                            sub1={"Hệ thống biến nhà chọc trời thành bộ pin khổng lồ"}
                                            sub2={"Mỹ vượt Nhật Bản về siêu máy tính mạnh nhất thế giới"}
                                            sub3={"Phát hiện thực vật lớn nhất thế giới rộng 200 km2"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box-cates">
                                <div className="box-wrapper" style={{border: "none"}}>
                                    <div className="box-title-cates">
                                            {/* <div className="row"> */}
                                                {/* <div className="col l-12"> */}
                                                    <ul className="group-cates">
                                                        <li className="item-cate item-cate-home">
                                                            <a href="/" className="cate-link cate-link-home">
                                                                Đời sống
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Bài học sống
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Tổ ấm
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Nhà
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Tiêu dùng
                                                            </a>
                                                        </li>
                                                        <li className="item-cate">
                                                            <a className="cate-link" href="/">
                                                                Xã hội
                                                            </a>
                                                        </li>
                                                    </ul>
                                                {/* </div> */}
                                            {/* </div> */}
                                    </div>
                                    <div className="box-content-cates">
                                        <ContentBoxCates
                                            title={"Nộm sứa xoài xanh thanh mát ngày hè"}
                                            image={"https://i1-giadinh.vnecdn.net/2022/06/01/Thnhphm11-1654074613-3746-1654074619.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=SxUQkHjEhHAGgSLENMWSaw"}
                                            des={"Món ăn là sự tổng hòa của sứa giòn, xoài chua thanh, rau thơm dậy mùi kích thích vị giác trong tiết trời nóng nực."}
                                            title2={"Tại sao người giàu phải xếp hàng mua đồ hiệu?"}
                                            des2={"Nạn cướp cửa hàng đồ hiệu ở nước Mỹ có thể là nguyên nhân khiến đơn vị bán hàng phải kiểm soát chặt ... "}
                                            sub1={"7 sai lầm khi dùng sản phẩm chăm sóc da"}
                                            sub2={"Lưu ý với gia đình có người cao tuổi"}
                                            sub3={"Nhà ống hình bậc thang"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-trending grid width">
                    <div className="trending-content">
                        <ul className="trending-list">
                            <li className="trending-item trending-item-main">
                                <RiseOutlined />
                                <span href="/" className="trending-link-main">
                                    Chủ đề
                                </span>
                            </li>
                            <li className="trending-item">
                                <a href="/" className="trending-link">
                                   Lương tối thiểu
                                </a>
                            </li>
                            <li className="trending-item">
                                <a href="/" className="trending-link">
                                    Mở cửa du lịch
                                </a>
                            </li>
                            <li className="trending-item">
                                <a href="/" className="trending-link">
                                    Nga mở chiến dịch quân sự
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainNews;