//import React, { Component } from "react";
// import Card from "../../components/Card";
// import ViewBtn from "../../components/ViewBtn";
// import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";

//class Owner extends Component {
 // render() {
//    return (
 //     <div>Owner Page</div>
 //   );
//  }
//}
//export default Owner;


import React, { Component } from "react";
import Card from "../../components/Card";
import EditBtn from "../../components/EditBtn";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import EditProperty from "../../components/Edit/Edit";
//import Wrapper from "../../components/Wrapper";

export default class Owners extends Component {
  state = {
    owners: [],
    owner: {},
    loaded:false
  };

  componentDidMount() {
    this.getOwners();
    //this.loadowners();
    this.state ={loaded:false}
  }

  loadowners = () => {
    API.getowners()
      .then((res) => {
        console.log('return from loadowners fct ' + res.data[0]._id)
        this.setState({ owners:res.data})
      })
      .catch(err => console.log(err));
      
  };

  viewOwnerDetails = (id) => {
    API.getOwner(id)
    .then((res) => {
      console.log(res.data)
     this.setState({property:res.data});
     console.log('state update' + this.state.owner.firstname)
    })
    .catch(err => console.log(err));

  }

  loadCard = () => {
    this.setState({loaded: true})
  }

  displayOwner = () => {
    this.loadCard();

  }

  deleteOwner = (id) => {
    API.deleteOwner(id)
    .then((res) => {
      //this.loadowners()
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
      <Row>
        
      </Row>
        <Row>
          <Col size="md-6 sm-12">
          <h4>Your Owners</h4>
          
           
                {this.state.owners.map(owner => (
                  <EditProperty key={owner._id}>
                    <a href={"/owners/" + owner._id}>
                      <strong>
                        {owner.firstname}
                      </strong>
                    </a>
                    <p>
                        {owner.lastname} lastname  
                        {owner.mobilenumber} mobilenumber  
                        {owner.emailid} emailid   
                    </p>
                    {/* <ViewBtn onClick={() => this.viewOwnerDetails(owner._id)} /> */}
                    <EditBtn onClick={() => 
                      {
                        this.loadCard();
                        this.viewOwnerDetails(owner._id);
                      }} />
                    <DeleteBtn onClick={() => this.deleteOwner(owner._id)} />
                  </EditProperty>
                ))}
               

          </Col>
          <Col size="md-6 sm-12">
          {this.state.loaded &&
          <Card
          firstname={this.state.owner.firstname}
          lastname={this.state.owner.lastname}
          emailid={this.state.owner.emailid}
          phonenumber={this.state.owner.phonenumber}
          mobilenumber={this.state.owner.mobilenumber}
          note={this.state.property.note}

        ></Card>}
          </Col>
        </Row>
      </Container>
    );
  }
}


//----


// import React, { Component } from "react";
// //import Jumbotron from "../../components/Jumbotron";
// import NewBtn from "../../components/NewBtnOwner";
// import API from "../../utils/API";

// import { Col, Row, Container } from "../../components/Grid";
// //import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

// class Owners extends Component {
//   state = {
//     firstname: "",
//     lastname: "",
//     emailid: "",
//     zipcode: "",
//     phonenumber: "",
//     mobilenumber: "",
//     note: "",
//     formLoaded: false

//   };

//   handleInputChange = (event) => {
//       this.setState({
//         [event.target.name]:event.target.value
//       })
//   }

//   handleSubmitInput = (event) => {
//       event.preventDefault();
//       console.log('state now is ' + this.state.FirstName)
//       API.saveProperty(this.state)
//           .then(function (response) {
//               console.log(response);
//           })

//   }

//   loadForm = () => {
//       this.setState({formLoaded: true})
//   }

//   render() {
//     return (
//         //backgroundImage='https://image.shutterstock.com/image-photo/property-real-estate-market-game-260nw-239874865.jpg'
//         <Container fluid>
//             <Row>
//                 <Col size="md-6 sm-12">
                    
//                     <NewBtn onClick={() => this.loadForm()} ></NewBtn>
                    
                    
                   
//                 </Col>
//                 <Col size="md-6 sm-12">
//                 {this.state.formLoaded &&                    
//                      <form>
//                          <h6>Enter the details for the new property</h6>
//                      <Input value={this.state.firstname} onChange={this.handleInputChange} name="firstname" placeholder="First Name (required)" />
//                      <Input value={this.state.lastname} onChange={this.handleInputChange} name="lastname" placeholder="Last Name (required)" />
//                      <Input value={this.state.emailid} onChange={this.handleInputChange} name="emailid" placeholder="Email ID (required)" />
//                      <Input value={this.state.phonenumber} onChange={this.handleInputChange} name="phonenumber" placeholder="Phone Number (Optional)" />
//                      <Input value={this.state.mobilenumber} onChange={this.handleInputChange} name="mobilenumber" placeholder="Mobile Number (required)" />
//                      <TextArea value={this.state.note} onChange={this.handleInputChange} name="note" placeholder="Enter a note for the Owner (Optional)" />
//                      <FormBtn onClick={this.handleSubmitInput}>Add Property</FormBtn>
//                  </form>}
//                 </Col>         
//             </Row>
//         </Container>
//     );
//   }
// }
// export default Owners;