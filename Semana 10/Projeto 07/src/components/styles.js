import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: none;
  border-radius: 5px;
  padding: 15px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  &:hover span {
    opacity: 0.75;
  }
  
`;
export const StyleBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  border-radius: 5px;
  padding: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  
`;
export const StyleApp = styled.div`
  width: 100%;
  background-color: black;
  .container {
  display: flex;
  justify-content: space-around;
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  align-items: center;
  gap: 10px;
}
`;
