import React from "react";
import "./Edit.css";

const EditProperty = props => {
    return(
      
<div className="card">
    {/* <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div> */}
    <h5>Property Summary</h5>
    <div className="content">
    {props.children}
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
    );
}
export default EditProperty



// export const ListItem = props => (
//   <li >
//     {props.children}
//   </li>
// );

//<div className="formContainer">
  {/* //   {/* <div className="img-container">
  //     <img alt={props.name} src={props.image} />
  //   </div> */}
  //   <h1>Enter a New Property</h1>
  //   <div className="content">
  //     <ul>
  //       <li>
  //         <strong>Country:</strong> {props.country}
  //       </li>
  //       <li>
  //         <strong>Address:</strong> {props.address}
  //       </li>
  //       <li>
  //         <strong>City:</strong> {props.city}
  //       </li>
  //       <li>
  //         <strong>Zipcode:</strong> {props.zipcode}
  //       </li>
  //       <li>
  //         <strong>State:</strong> {props.state}
  //       </li>
  //       <li>
  //         <strong>Beds:</strong> {props.beds}
  //       </li>
  //       <li>
  //         <strong>Baths:</strong> {props.baths}
  //       </li>
  //       <li>
  //         <strong>Total Sqft:</strong> {props.sqft}
  //       </li>
  //       <li>
  //         <strong>Note:</strong> {props.note}
  //       </li>
  //     </ul>
  //   </div>
  //   {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
  //     𝘅
  //   </span> */}
  // </div> */}