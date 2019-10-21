import styled from "styled-components";
import { FaTimes as CancleBtnSvg } from "react-icons/fa";
import { FaListUl as ListSvg } from "react-icons/fa";
import { FaUser as UserSvg } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { MdDashboard as DashboardSvg } from "react-icons/md";
import { IoIosAlbums as InventorySvg } from "react-icons/io";

const SideBarBody = styled.div`
  
  display:block;
 
  flex-direction: column;
  padding-top: 30px;
  width:  ${props => (props.toggle ? " 50% " : "0")}
  height: 100vh;
  background-color: #0063FF;
  z-index: 3;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 50px 50px 0px;
  position:fixed;
  top:0;
  
  @media all and (min-width: 768px)  {
    display: ${props => (props.toggle ? "flex" : "flex")};
    position:  fixed;
    width: 22%;
    top:12%;
    z-index:0;
    height:88%;
    border-radius: 0px 50px 50px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const SideBarElement = styled.span`
  display: flex;
  width: 80;
  height: 60px;
  transform: ${props =>
    props.toggle ? "translateX(0px)" : "translateX(-30px)"};
  justify-content: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  font-family: montserrat;
  padding: 2em;
  transition: all 10s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    background: transparent;
  }
  @media all and (min-width: 768px) {
    display: block;
    z-index: 10;

    a {
      color: white;
      font-weight: bold;
      background: transparent;
      margin-left: 1px;
      padding-left: 10px;
      outline: none;
    }
  }
`;
const CancleBtn = styled(CancleBtnSvg)`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 10px;
  margin-left: 7px;
  width: 35px;
  height: 35px;
  background: transparent;
  @media all and (min-width: 768px) {
    display: none;
  }
`;
const DashBoardIcon = styled(DashboardSvg)`
  background: transparent;
  width: 30px;
  height: 30px;
  margin-bottom: -8px;
  margin-right: 4px;
  margin-left: 7px;
  color: #fff;
`;
const InventoryIcon = styled(InventorySvg)`
  background: transparent;
  width: 30px;
  height: 30px;
  margin-bottom: -8px;
  margin-right: 4px;
  margin-left: 10px;
  color: #fff;
`;
const ListIcon = styled(ListSvg)`
  background: transparent;
  width: 30px;
  height: 30px;
  margin-bottom: -8px;
  margin-right: 4px;
  margin-left: 10px;
  color: #fff;
`;
const UserIcon = styled(UserSvg)`
  background: transparent;
  width: 30px;
  height: 30px;
  margin-bottom: -8px;
  margin-right: 4px;
  margin-left: 10px;
  color: #fff;
`;

export {
  SideBarBody,
  SideBarElement,
  CancleBtn,
  DashBoardIcon,
  InventoryIcon,
  ListIcon,
  UserIcon
};
