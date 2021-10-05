import styled from "styled-components";

export const FooterStyle = styled.div `

display: flex;
align-items: center;
justify-content: space-around;
margin: 30px 0;

ul li{
    list-style: none;
    padding: 13px 0;
}
ul li a {
    font-size: 18px;
    text-decoration: none;
    color: #000
}

h6{
    padding: 0;
    margin: 0;
    font-size: 20px;
    color: ${({theme}) => theme.colors.primayColor};
}

`

export const SocialMedia = styled.div ` 
    width: 120px;
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
    svg{
        color: ${({theme}) => theme.colors.primayColor};
        font-size:20px;
    }
`