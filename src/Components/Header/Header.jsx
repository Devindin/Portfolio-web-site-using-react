import React from "react";
import headerCSS from '../Header/Header.module.css';

function Header(){
    return(
        <div className={`${headerCSS.HeaderWrapper} section`}>
        <h3 className="sectionheading"><i className="ri-shining-fill"></i> Let,s Meet!</h3>
        <h1 className="section_Title">I'm Devindi Karunathilaka <br/> Full Stack developer </h1>
        <div className={headerCSS.header_btns}>
            <button>
                <span>My Works  </span>
                <i className="ri-layout-grid-line"></i>
            </button>
            <button>
                <span>Download CV  </span>
                <i className="ri-download-line"></i>
            </button>
        </div>
        </div>
    )
}

export default Header