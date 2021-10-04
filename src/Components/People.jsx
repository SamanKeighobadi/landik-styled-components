import React from "react";
import { PeopleStyle, SocialMedia, HeaderPeople,Introduction } from "./styles/People.styled";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { GiGrapes } from "react-icons/gi";
import { data } from "../data/people";

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
        {data.map((user,index) => (
          <div key={index}>
            <div>
              <img src={user.img} alt="user" />
            </div>
            <Introduction>
              <h5>{user.name}</h5>
              <p>{user.email}</p>
            </Introduction>
            <SocialMedia>
              <FaTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
            </SocialMedia>
          </div>
        ))}
      </PeopleStyle>
    </>
  );
};

export default People;
