import styled from "styled-components";
import { FiAlignLeft as NavSvg } from "react-icons/fi";
import { MdNotificationsActive as BellSvg } from "react-icons/md";
import { FaShoppingBasket as MainIconSvg } from "react-icons/fa";

//Header section
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.background};
  justify-content: space-between;

  position: fixed;
  top: 0;
  z-index: 2;
  @media all and (min-width: 768px) {
    height: 84px;
    background: transparent;
    h5 {
      display: inline-block;
      position: absolute;
      margin-left: 80px;
      margin-top: 30px;
      background: transparent;
      color: #0063ff;
    }
  }
`;

// Navbar Button

const NavbarBtn = styled.span`
  display: inline-block;
  width: 9.5%;
  margin: 2% 4%;
  background: transparent;
`;
//MAIN ICON
const MainIcon = styled(MainIconSvg)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  @media all and (min-width: 768px) and (max-width: 1199px) {
    display: inline-block;
    color: #0063ff;
    width: 35px;
    height: 35px;
    margin-top: -2px;
  }
`;
//Bar Icon
const BarIcon = styled(NavSvg)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  @media all and (min-width: 768px) and (max-width: 1199px) {
    display: none;
  }
`;

const SearchField = styled.span`
  width: 40%;
  height: 40px;
  display: none;
  margin-top: 15px;
  border-radius: 30px 30px 30px 30px;

  @media all and (min-width: 768px) {
    display: block;
    color: #0063ff;
    border: none;
    input {
      width: 100%;
      height: 100%;
      border-radius: 30px 30px 30px 30px;
      outline: none;
      color: #0063ff;
      background: #0063ff;
      border: none;
      opacity: 0.5;
    }
  }
`;

//Notification  Area
const NotificationArea = styled.div`
  display: flex;
  width: 40%;
  margin: 2% 4%;
  justify-content: space-between;
  align-items: center;
  @media all and (min-width: 768px) {
    width: 15%;
    margin: 2% 2%;
    justify-content: space-between;
    align-items: center;
  }
`;
// future fix nest img & text-box in a seperate div
/*TODO*/
// Notification Icon
const BellIcon = styled(BellSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  width: 31px;
  height: 29px;

  background-image: url(${props => props.pic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const TextBox = styled.span`
  width: 20%;
  transform: translateX(-92%);

  p {
    font-style: italic;
    background: transparent;
  }
`;

export {
  Header,
  NavbarBtn,
  ImageContainer,
  TextBox,
  BarIcon,
  BellIcon,
  NotificationArea,
  SearchField,
  MainIcon
};

// border: 1px solid white;
// border: 1px solid red;
// border: 1px solid black;
// border: 1px solid red;
// border: 1px solid white;
// border: 1px solid white;
