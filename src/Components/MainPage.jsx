import React from "react";
import {MainStyle,Desc,ImgContainer} from '../Components/styles/MainPage.styled.js'

const MainPage = () => {
  return (
    <MainStyle>
      <Desc>
        <h1>Markham Merlot</h1>
        <div>
          <span>some text</span>
          <button>go</button>
        </div>
      </Desc>

      <ImgContainer>
        <img src="https://images.unsplash.com/photo-1560148218-1a83060f7b32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"
         alt="Markham Merlot" />
      </ImgContainer>
    </MainStyle>
  );
};

export default MainPage;
