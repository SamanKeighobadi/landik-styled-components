/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {FooterStyle,SocialMedia} from '../styles/Footer.styled.js'
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterStyle>
            <div>
                <ul>
                    <li>
                        <h6>About Us</h6>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <h6>Help</h6>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <h6>About Us</h6>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                </ul>
            </div>

            <SocialMedia>
            <FaTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
            </SocialMedia>
        </FooterStyle>
    );
};

export default Footer;