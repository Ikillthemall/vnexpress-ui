import React from 'react';
import ExpandCate from './expandCate';
import Header from './header';
import MainNews from './mainNews';
import Nav from './nav';
import Podcasts from './podcasts';
import TopNews from './topNews';
import Videos from './videos';
const Main = () => {
    return (
        <>
            <div className="main">
                <Header />
                <Nav />
                <TopNews />
                <MainNews />
                <Videos />
                <Podcasts />
                <ExpandCate />
            </div>
        </>
    );
};

export default Main;