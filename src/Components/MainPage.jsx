import React from "react";
import {MainStyle,Desc,ImgContainer} from '../Components/styles/MainPage.styled.js'

const MainPage = () => {
  return (
    <MainStyle>
      <Desc>
        <h1>Markham Merlot  <p>Sauvignon</p></h1>
        <div>
          <span>some text</span>
          <button>&rarr;</button>
        </div>
      </Desc>

      <ImgContainer>
        <img src="https://wineparity.com/wp-content/uploads/2021/02/2017-Markham-Merlot-300x300.png"
         alt="Markham Merlot" />
      </ImgContainer>
    </MainStyle>
  );
};

export default MainPage;
