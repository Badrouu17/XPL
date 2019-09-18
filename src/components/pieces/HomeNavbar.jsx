import React, { Component } from "react";
import ResponsiveMenu from "react-responsive-navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

class HomeNavbar extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<FaBars />}
        menuCloseButton={<FaTimes />}
        changeMenuOn="615px"
        largeMenuClassName="large-menu-className"
        smallMenuClassName="small-menu-className"
        menu={
          <ul className="home-navbar" data-aos="fade-down" data-aos-delay="500">
            <li className="nav-item">
              <AnchorLink href="#home">HOME</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#about">ABOUT</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#maps">MAPS</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#news">NEWS</AnchorLink>
            </li>
          </ul>
        }
      />
    );
  }
}

export default HomeNavbar;
