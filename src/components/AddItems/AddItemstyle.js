import styled from "styled-components";
import { Circle, Heart, Hourglass, Ellipsis } from "react-spinners-css";

const CircleLoad = styled(Ellipsis)`
  color: #0063ff;
  width: 50px;
`;
const HeaderText = styled.span`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 4%;
  @media all and (min-width: 768px) {
    font-size: 20px;
    margin-top: ;
  }
`;
const FormContainer = styled.div`
  display: flex;
  width: 90%;
  height: 34.4%;
  border-radius: 10px;
  border: 1px solid #0063ff;

  margin: 0 auto;
`;
const PictureContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #0063ff;

  div {
    width: 100%;
    height: 60%;
    background-image: url(${props => props.pic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 8px 0 0 0;
  }
  span {
    width: 100%;
    height: 40%;
  }

  button {
    position: absolute;
    background: #0063ff;
    bottom: 10%;
    left: 25%;
    width: 70px;
    height: 33px;
    background: #0063ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    @media all and (min-width: 768px) {
      left: 37%;
      width: 80px;
      height: 45px;
    }
  }
  input {
    position: absolute;
    bottom: 10%;
    left: 25%;
    width: 70px;
    height: 33px;
    background: #725374;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    outline: none;
    z-index: 2;
    opacity: 0;
    @media all and (min-width: 768px) {
      left: 37%;
      width: 80px;
      height: 45px;
    }
  }
`;
const FormBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-align: center;

  input,
  select {
    width: 90%;
    height: 35px;

    border-radius: 4px;
    border: 0.5px solid #b0b0b0;
    background: rgba(255, 255, 255, 0.485366);
    margin: 5px auto;
    @media all and (min-width: 768px) {
      left: 37%;
      width: 300px;
      height: 50px;
    }
  }

  button {
    margin-top: 10px;
    width: 60px;
    height: 33px;
    background: #0063ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    color: #fff;
    outline: none;
    @media all and (min-width: 768px) {
      margin-top: 20px;
      width: 80px;
      height: 45px;
    }
  }
`;

export { HeaderText, FormContainer, PictureContainer, FormBody, CircleLoad };