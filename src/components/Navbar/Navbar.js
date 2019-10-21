import React from "react";
import {
  Header,
  NavbarBtn,
  ImageContainer,
  TextBox,
  BarIcon,
  BellIcon,
  NotificationArea,
  SearchField
} from "./NavbarStyled";
import pic from "../../images/thumb.jpg";
export default function Navbar({ handleToggle, visible }) {
  console.log(visible);
  return (
    <div>
      <Header>
        <NavbarBtn onClick={() => handleToggle()}>
          <BarIcon />
        </NavbarBtn>
        <SearchField />
        <NotificationArea>
          <BellIcon />
          <ImageContainer pic={pic}></ImageContainer>
          <TextBox>
            <p>hello</p>
          </TextBox>
        </NotificationArea>
      </Header>
    </div>
  );
}
