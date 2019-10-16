import styled from "styled-components";

const HeaderText = styled.span`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  margin-top: 4%;
`;
const FormContainer = styled.div`
  display: flex;
  width: 90%;
  height: 34.4%;
  border-radius: 10px;
  border: 1px solid brown;
  margin: 0 auto;
`;
const PictureContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
  div {
    width: 100%;
    height: 50%;
    background-image: url(${props => props.pic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid red;
    border-radius: 10px 0 0 0;
  }
  span {
    width: 100%;
    height: 50%;
    border: 1px solid purple;
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
  }
`;
const FormBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid gold;

  input,
  select {
    width: 90%;
    height: 35px;
    border: 1px solid pink;
    border-radius: 4px;
    border: 0.5px solid #b0b0b0;
    background: rgba(255, 255, 255, 0.485366);
  }
  button {
    margin-top: 1px;
    width: 60px;
    height: 33px;
    background: #725374;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    outline: none;
  }
`;

export { HeaderText, FormContainer, PictureContainer, FormBody };
