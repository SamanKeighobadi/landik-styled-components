import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/common/Header";
import MainPage from "./Components/MainPage";
// styled component
import { Container } from "./Components/styles/Container.styled";
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
          saman
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
