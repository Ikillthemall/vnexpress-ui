import React from 'react';

const ContentBoxCates = ({title,image,des, title2, des2, sub1, sub2,sub3}) => {
        return (
            <>
              <div className="content-cates-top" style={{paddingTop: "20px"}}>
                    <div className="row">
                        <div className="col l-8 cates-top-border">
                            <div className="news-item cate-item">
                                <div className="news-content cate-content flex">
                                    <div className="news-image-left cate-image-left">
                                        <a href="/" className="news-image-left-link">
                                            <img src={image} alt="newsmain" />
                                        </a>
                                    </div>
                                    <div className="news-des cate-des">
                                        <h3 className="news-title cate-title">
                                            <a href="/" className="news-link cate-link">
                                                {title}
                                            </a>
                                        </h3>
                                        {des}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4 cates-top-sub">
                            <div className="news-des cate-des">
                                <h3 className="news-title cate-title">
                                    <a href="/" className="news-link cate-link">
                                        {title2}
                                    </a>
                                </h3>
                                {des2}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-cates-sub">
                    <div className="row">
                        <div className="col l-4">
                            <a href="/" className="cates-sub"><span className="cates-symbol">&#9679;&#32;</span> {sub1}</a>
                        </div>
                        <div className="col l-4">
                            <a href="/" className="cates-sub"><span className="cates-symbol">&#9679;&#32;</span>{sub2}</a>
                        </div>
                        <div className="col l-4">
                            <a href="/" className="cates-sub"><span className="cates-symbol">&#9679;&#32;</span>{sub3}</a>
                        </div>
                    </div>
                </div>                
            </>
        );
   
};

export default ContentBoxCates;