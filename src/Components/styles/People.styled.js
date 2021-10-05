import styled from "styled-components";

export const PeopleStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
 
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
  width: 150px;
  margin: 0 auto;
  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primayColor};
  }
`;

export const HeaderPeople = styled.div`
  width: 450px;
  max-width: 100%;
  text-align: center;
  margin: 30px auto;
  span {
    color: ${({ theme }) => theme.colors.primayColor};
    font-size: 40px;
  }
  p {
    color: ${({ theme }) => theme.colors.primayColor};
    font-size: 17px;
  }
  h3 {
    font-size: 40px;
  }
`;
export const Introduction = styled.div`
  text-align: center;
  h5 {
    color: ${({ theme }) => theme.colors.primayColor};
    font-size: 18px;
  }
  p {
    font-weight: lighter;
    font-size: 11px;
  }
`;
