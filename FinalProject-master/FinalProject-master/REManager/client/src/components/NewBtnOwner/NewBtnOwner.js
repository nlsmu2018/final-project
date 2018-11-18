import React from "react";
import "./NewBtnOwner.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const NewBtnOwner = props => (
  <span className="new-btn" {...props}>
    Add New Owner
  </span>
);

export default NewBtnOwner;