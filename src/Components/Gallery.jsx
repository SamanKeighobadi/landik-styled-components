import React from "react";
import { GiGrapes } from "react-icons/gi";
import { HeaderGallery, MainGallery} from "./styles/Gallery.styled.js";
import { data } from "../data/gallery";

const Gallery = () => {
  return (
    <>
      <HeaderGallery>
        <span>
          <GiGrapes />
        </span>
        <p>Nisi fugiat ea reprehenderit qui incididunt tempor</p>
        <h3>
          Our <span>Gallery</span>
        </h3>
      </HeaderGallery>
      <MainGallery>
        {data.map((wine, index) => (
          <div key={index}>
            <img src={wine.img} alt="wine" />
          </div>
        ))}
      </MainGallery>
    </>
  );
};

export default Gallery;
