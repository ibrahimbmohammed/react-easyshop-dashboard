import styled from "styled-components";
import { FiAlignLeft as NavSvg } from "react-icons/fi";
import { MdNotificationsActive as BellSvg } from "react-icons/md";

//Header section
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.background};
  justify-content: space-between;
`;

// Navbar Button

const NavbarBtn = styled.span`
  display: inline-block;
  width: 9.5%;
  margin: 2% 4%;
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
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  width: 31px;
  height: 29px;

  background-image: url(${props => props.pic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const TextBox = styled.span`
  width: 20%;
  transform: translateX(-92%);

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

// border: 1px solid white;
// border: 1px solid red;
// border: 1px solid black;
// border: 1px solid red;
// border: 1px solid white;
// border: 1px solid white;
