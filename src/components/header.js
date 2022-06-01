import { ClockCircleOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="grid width">
                    <div className="header-content">
                        <div className="header-left flex">
                            <div className="header-logo">
                                <a className="header-link" href="/">
                                    <img
                                        src="https://s1.vnecdn.net/vnexpress/restruct/i/v608/v2_2019/pc/graphics/logo.svg"
                                        alt="Vnexpress"
                                    />
                                </a>
                            </div>
                            <span className="header-time">
                                Thứ ba, 31/05/2022
                            </span>
                        </div>
                        <div className="header-right flex">
                            <div className="header-rectangle flex">
                                <span className="header-new">
                                    <ClockCircleOutlined />
                                    <a className="header-new-link" href="/">
                                        Mới nhất
                                    </a>
                                </span>
                                <a href="/" className="header-internation">
                                    International
                                </a>
                            </div>
                            <div className="header-action flex">
                                <form className="header-search" action="">
                                    <input placeholder="Tìm kiếm"          
                                    />
                                    <SearchOutlined style={{ fontSize: '16px', color: '#08c' }} />
                                </form>
                                <div className="header-login">
                                    <span>
                                        <UserOutlined style={{ fontSize: '20px', color: '#08c' }}/>
                                    </span>
                                    <span>Đăng nhập</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;