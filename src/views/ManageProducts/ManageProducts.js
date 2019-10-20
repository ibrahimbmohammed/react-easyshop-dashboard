import { ManageBody } from "./ManageStyled";
import AddAnkara from "../../components/AddItems/AddAnkara";
import AddLace from "../../components/AddItems/AddLace";

import React, { Component } from "react";
export default class ManageProducts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.handleToggle();
  }
  render() {
    return (
      <>
        <AddAnkara handleToggle={this.props.handleToggle} />
        <AddLace handleToggle={this.props.handleToggle} />
      </>
    );
  }
}

//import React from "react";
// export default function ManageProducts(handleToggle) {
//   return (
//     <>
//       <ManageBody>
//         <AddAnkara handleToggle={() => handleToggle} />
//         <AddLace handleToggle={() => handleToggle} />
//       </ManageBody>
//     </>
//   );
// }
