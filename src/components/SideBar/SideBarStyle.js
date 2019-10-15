import styled from "styled-components";

const SideBarBody = styled.div`
  display: ${props => (props.toggle ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  padding-top: 30px;
  width: 70%;
  height: 100vh;
  background-color: palegoldenrod;
  z-index: 1;
  transition: all 1s ease-in-out;
  border-radius: 0px 50px 50px 0px;
`;

const SideBarElement = styled.span`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  padding: 0.4em;
`;

export { SideBarBody, SideBarElement };
