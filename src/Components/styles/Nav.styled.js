import styled from "styled-components";

export const Nav = styled.nav`
  height: 50px;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  box-shadow: 3px 10px 3px rgba(0, 0, 0, 0.2);
  margin: 0 0 12px 0;
  ul li {
    display: inline-block;
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    color: gray;
    padding: 12px 10px;
  }
  svg{
      font-size: 25px;
      padding: 0 10px;
  }
`;
