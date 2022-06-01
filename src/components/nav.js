import { HomeOutlined, UnorderedListOutlined, } from "@ant-design/icons";

const Nav = () => {
    return (
        <>
            <div className="nav">
                <div className="grid width">
                    <div className="navbar">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a className="navbar-link" href="/"><HomeOutlined /></a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/thoisu">Thời sự
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/thegioi">Thế giới</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/gocnhin">Góc nhìn</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/phapluat">Pháp luật</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/khoahoc">Khoa học</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/podcast">Podcasts</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/kinhdoanh">Kinh doanh</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/giaitri">Giải trí</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/kinhte">Kinh tế</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/suckhoe">Sức khỏe</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/doisong">Đời sống</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/dulich">Du lịch</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/sohoa">Số hóa</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/xe">Xe</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/tamsu">Tâm sự</a>
                            </li>
                            <li style={{display : "flex", alignItems : "center", cursor: "pointer"}} className="navbar-item">
                                <UnorderedListOutlined />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;