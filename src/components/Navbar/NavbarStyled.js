import styled from "styled-components";
import { FiAlignLeft as NavSvg } from "react-icons/fi";
import { MdNotificationsActive as BellSvg } from "react-icons/md";

//Header section
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.background};
  border: 1px solid black;
  justify-content: space-between;
`;

// Navbar Button
const NavbarBtn = styled.span`
  display: inline-block;
  width: 9.5%;
  margin: 2% 4%;
  border: 1px solid red;
`;
//Bar Icon
const BarIcon = styled(NavSvg)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

//Notification  Area
const NotificationArea = styled.div`
  display: flex;
  width: 40%;
  margin: 2% 4%;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
`;
// future fix nest img & text-box in a seperate div
/*TODO*/
// Notification Icon
const BellIcon = styled(BellSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid white;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  width: 33px;
  height: 100%;
  background-image: url(${props => props.pic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid white;
`;
const TextBox = styled.span`
  width: 20%;
  transform: translateX(-92%);
  border: 1px solid white;

  p {
    font-style: italic;
  }
`;

export {
  Header,
  NavbarBtn,
  ImageContainer,
  TextBox,
  BarIcon,
  BellIcon,
  NotificationArea
};
