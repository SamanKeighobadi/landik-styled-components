import React from "react";
// Customize Components
import Header from "./Components/common/Header";
import Gallery from "./Components/Gallery";
import MainPage from "./Components/MainPage";
import People from "./Components/People";
// styled component
import { Container } from "./Components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/styles/Global";

const theme = {
    colors:{
        header:'red',
        body:'blue',
        footer:'green',
        primayColor:"#c40d3c"
    }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
        <Container>
          <Header />
          <MainPage/>
          <Gallery />
          <People />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
