import React from 'react';
import Header from './header';
import MainNews from './mainNews';
import Nav from './nav';
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
            </div>
        </>
    );
};

export default Main;