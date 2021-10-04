import styled from "styled-components";

export const MainStyle = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-family: "Ephesis", cursive;
    font-size:60px;
  }
`;

export const Desc = styled.div `
    padding: 0 0 0 30px;
    height: 50%;
    text-align: center;
    button{
        margin: 0 0 0 15px;
        padding: 10px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.colors.primayColor};
        outline: none;
        background: transparent;
        color: ${({theme}) => theme.colors.primayColor};
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }
    span{
        text-transform: capitalize;
        font-style: italic;
        padding: 0 10px 0 0;
    }
`

export const ImgContainer = styled.div `
    padding: 0 0 0 30px;
    img{
        height: 80vh;
        width: 100%;
    }
`