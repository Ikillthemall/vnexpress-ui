
const NewsItem = ({title, image, des, height}) => {
    return (
        <>
            <div className="news-item">
                    <h3 className="news-title">
                        <a href="/" className="news-link">
                            {title}
                        </a>
                    </h3>
                    <div className="news-content flex">
                        <div className="news-image-left">
                            <a href="/" className="news-image-left-link">
                                <img src={image} alt="newsmain" />
                            </a>
                        </div>
                        <p className="news-des">
                            {des}
                        </p>
                    </div>
            </div>
        </>
    );
};

export default NewsItem;