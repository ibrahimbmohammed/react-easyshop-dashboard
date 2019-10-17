import React from "react";
import { Link } from "react-router-dom";
import { SideBarBody, SideBarElement, CancleBtn } from "./SideBarStyle";

export default function SideBar({ toggle, CloseSideBar }) {
  if (toggle) {
    return (
      <SideBarBody toggle>
        <CancleBtn onClick={() => CloseSideBar()} />
        <SideBarElement>
          <Link to="/">Dashboard</Link>
        </SideBarElement>
        <Link to="/manage">
          <SideBarElement>Add Product</SideBarElement>
        </Link>
        <SideBarElement>
          <Link to="/store"> Inventory</Link>
        </SideBarElement>
        <SideBarElement>
          <Link to="login">User Details</Link>
        </SideBarElement>
      </SideBarBody>
    );
  }
  return <SideBarBody />;
}
