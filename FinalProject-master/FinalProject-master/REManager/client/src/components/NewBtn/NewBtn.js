import React from "react";
import "./NewBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const NewBtn = props => (
  <span className="new-btn" {...props}>
    Enter New Property
  </span>
);

export default NewBtn;