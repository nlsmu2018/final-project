// import React from "react";

// const Card = ({ children }) => (
//   <div
//     style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//     className="card"
//   >
//     {children}
//   </div>
// );

// export default Card;

import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    {/* <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div> */}
    <h3>Property Details</h3>
    <div className="content">
      <div>
        <strong>Country:</strong> {props.country}
      </div>
      <div><strong>Address:</strong> {props.address}</div>
      <div><strong>City:</strong> {props.city}</div>
      <div><strong>Zipcode:</strong> {props.zipcode}</div>
      <div><strong>State:</strong> {props.state}</div>
      <div><strong>Beds:</strong> {props.beds}</div>
      <div><strong>Baths:</strong> {props.baths}</div>
      <div><strong>Total Sqft:</strong> {props.sqft}</div>
      <div><strong>Note:</strong> {props.note}</div>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default Card;
