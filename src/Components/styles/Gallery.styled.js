import styled from "styled-components";


export const HeaderGallery = styled.div `
    width: 450px;
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    span{
        color: ${({theme}) => theme.colors.primayColor};
        font-size: 40px;
    }
    p{
        color: ${({theme}) => theme.colors.primayColor};
        font-size: 17px;
    }
    h3{
        font-size: 40px;
    }
`
export const MainGallery = styled.div `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 15px;

    img{
        width: 250px;
    }
`