import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import TableInfo from './TableInfo';
import TopBar from './TopBar';

function ContentWrapper(){
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar/>
                <ContentRowTop/>
                <TableInfo/>
                <Footer/>
            </div>
        </div>
        );
}
export default ContentWrapper;