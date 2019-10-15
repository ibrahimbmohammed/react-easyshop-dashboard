import React from "react";
import {
  HeaderText,
  FormContainer,
  FormBody,
  PictureContainer
} from "./ManageStyled";
import pic from "../../images/thumb.jpg";

export default function ManageProducts() {
  return (
    <>
      <HeaderText>
        <h3>Add Ankara</h3>
      </HeaderText>
      <FormContainer>
        <PictureContainer pic={pic}>
          <div></div>
          <span></span>
          <button>Add pic</button>
        </PictureContainer>
        <FormBody>
          <select>
            <option>blue</option>
            <option>red</option>
            <option>black</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <input type="text" />
          <input type="text" />
          <button>Add</button>
        </FormBody>
      </FormContainer>
      <HeaderText>
        <h3>Add Ankara</h3>
      </HeaderText>
      <FormContainer>hello</FormContainer>
    </>
  );
}
