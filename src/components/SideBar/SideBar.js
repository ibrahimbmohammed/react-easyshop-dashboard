import React from "react";
import { Link } from "react-router-dom";
import {
  SideBarBody,
  SideBarElement,
  CancleBtn,
  DashBoardIcon,
  InventoryIcon,
  ListIcon,
  UserIcon
} from "./SideBarStyle";

export default function SideBar({ toggle, CloseSideBar, currentWidth }) {
  if (currentWidth <= 737) {
    return (
      <>
        {toggle ? (
          <SideBarBody toggle>
            <CancleBtn onClick={() => CloseSideBar()} />
            <SideBarElement>
              <Link to="/"> Dashboard</Link>
            </SideBarElement>

            <SideBarElement>
              <Link to="/manage">Add Items</Link>
            </SideBarElement>

            <SideBarElement>
              <Link to="/store"> Inventory</Link>
            </SideBarElement>
            <SideBarElement>
              <Link to="login">User</Link>
            </SideBarElement>
          </SideBarBody>
        ) : null}
      </>
    );
  }
  return (
    <>
      <SideBarBody>
        <SideBarElement>
          <DashBoardIcon />
          <Link to="/">Dashboard</Link>
        </SideBarElement>

        <SideBarElement>
          <InventoryIcon />
          <Link to="/manage">Add Items</Link>
        </SideBarElement>

        <SideBarElement>
          <ListIcon />
          <Link to="/store"> Inventory</Link>
        </SideBarElement>
        <SideBarElement>
          <UserIcon />
          <Link to="login">User</Link>
        </SideBarElement>
      </SideBarBody>
    </>
  );
}
