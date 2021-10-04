/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Nav} from "../styles/Nav.styled";
// react icons
import {FaWineGlassAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <span><FaWineGlassAlt /></span>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

export default Header;
