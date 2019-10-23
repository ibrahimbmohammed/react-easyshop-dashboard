import React from "react";
import {
  Header,
  NavbarBtn,
  ImageContainer,
  TextBox,
  BarIcon,
  BellIcon,
  NotificationArea,
  SearchField,
  MainIcon
} from "./NavbarStyled";
import pic from "../../images/thumb.jpg";
export default function Navbar({ handleToggle, visible }) {
  console.log(visible);
  return (
    <div>
      {visible ? (
        <Header>
          <NavbarBtn onClick={() => handleToggle()}>
            <MainIcon> </MainIcon>

            <BarIcon />
          </NavbarBtn>
          <h5>Easy shop</h5>
          <SearchField>
            <input />
          </SearchField>
          <NotificationArea>
            <BellIcon />
            <ImageContainer pic={pic}></ImageContainer>
            <TextBox>
              <p>hello</p>
            </TextBox>
          </NotificationArea>
        </Header>
      ) : null}
    </div>
  );
}
