import styled from "styled-components";
import { FaTimes as CancleBtnSvg } from "react-icons/fa";

const SideBarBody = styled.div`
  /* display: ${props => (props.toggle ? "flex" : "none")}; */
  display:flex;
  position: absolute;
  flex-direction: column;
  padding-top: 30px;
  width:  ${props => (props.toggle ? " 50% " : "0")}
  height: 100vh;
  background-color: palegoldenrod;
  z-index: 1;
  transition: all .5s ease-in-out;
  border-radius: 0px 50px 50px 0px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    display: ${props => (props.toggle ? "flex" : "flex")};
    position: absolute;
    width: 30%;
  }
`;

const SideBarElement = styled.span`
  display: flex;
  width: 60;
  height: 60px;
  transform: translateX(-50px);
  justify-content: center;
  margin-top: 20px;
  padding: 2em;
  background: black;
  transition: all 1s ease-in-out;
  opacity: 0.5;
`;
const CancleBtn = styled(CancleBtnSvg)`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 10px;
  margin-left: 10px;
  width: 35px;
  height: 35px;
`;

export { SideBarBody, SideBarElement, CancleBtn };
