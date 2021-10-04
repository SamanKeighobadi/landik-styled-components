import React from "react";
import { PeopleStyle, SocialMedia, HeaderPeople } from "./styles/People.styled";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import {GiGrapes} from 'react-icons/gi'

const People = () => {
  return (
    <>
      <HeaderPeople>
        <span>
          <GiGrapes />
        </span>
        <p>Fugiat culpa qui cupidatat esse id commodo</p>
        <h3>
          Our <span>People</span>
        </h3>
      </HeaderPeople>
      <PeopleStyle>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt="user"
            />
          </div>
          <div>
            <h5>Saman Keighobadi</h5>
            <p>saman.keighobadi@gmail.com</p>
          </div>
          <SocialMedia>
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
          </SocialMedia>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt="user"
            />
          </div>
          <div>
            <h5>Saman Keighobadi</h5>
            <p>saman.keighobadi@gmail.com</p>
          </div>
          <SocialMedia>
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
          </SocialMedia>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt="user"
            />
          </div>
          <div>
            <h5>Saman Keighobadi</h5>
            <p>saman.keighobadi@gmail.com</p>
          </div>
          <SocialMedia>
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
          </SocialMedia>
        </div>
      </PeopleStyle>
    </>
  );
};

export default People;
