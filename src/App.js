import React from "react";
import Header from "./Components/common/Header";
// styled component
import { Container } from "./Components/styles/Container.styled";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        Hello World
      </Container>
    </>
  );
};

export default App;
