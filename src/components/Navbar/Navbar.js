import React from "react";
import {
  Header,
  NavbarBtn,
  ImageContainer,
  TextBox,
  BarIcon,
  BellIcon,
  NotificationArea
} from "./NavbarStyled";
import pic from "../../images/thumb.jpg";
export default function Navbar({ handleToggle }) {
  return (
    <div>
      <Header>
        <NavbarBtn onClick={() => handleToggle()}>
          <BarIcon />
        </NavbarBtn>
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
