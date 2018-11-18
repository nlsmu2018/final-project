import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
import NewBtn from "../../components/NewBtn";
import API from "../../utils/API";

import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    country: "",
    address: "",
    city: "",
    zipcode: "",
    state: "",
    beds: "",
    baths: "",
    sqft: "",
    note: "",
    formLoaded: false

  };

  handleInputChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
  }

  handleSubmitInput = (event) => {
      event.preventDefault();
      console.log('state now is ' + this.state.country)
      API.saveProperty(this.state)
          .then(function (response) {
              console.log(response);
          })

  }

  loadForm = () => {
      this.setState({formLoaded: true})
  }

  render() {
    return (
        //backgroundImage='https://image.shutterstock.com/image-photo/property-real-estate-market-game-260nw-239874865.jpg'
        <Container fluid>
            <Row>
                <Col size="md-6 sm-12">
                    
                    <NewBtn onClick={() => this.loadForm()} ></NewBtn>
                    
                    
                   
                </Col>
                <Col size="md-6 sm-12">
                {this.state.formLoaded &&                    
                     <form>
                         <h6>Enter the details for the new property</h6>
                     <Input value={this.state.country} onChange={this.handleInputChange} name="country" placeholder="Country (required)" />
                     <Input value={this.state.address} onChange={this.handleInputChange} name="address" placeholder="Address (required)" />
                     <Input value={this.state.city} onChange={this.handleInputChange} name="city" placeholder="City (Optional)" />
                     <Input value={this.state.zipcode} onChange={this.handleInputChange} name="zipcode" placeholder="Zipcode (required)" />
                     <Input value={this.state.state} onChange={this.handleInputChange} name="state" placeholder="State (Optional)" />
                     <Input value={this.state.beds} onChange={this.handleInputChange} name="beds" placeholder="Number beds (Optional)" />
                     <Input value={this.state.baths} onChange={this.handleInputChange} name="baths" placeholder="Number baths (Optional)" />
                     <Input value={this.state.sqft} onChange={this.handleInputChange} name="sqft" placeholder="Total sqft (Optional)" />
                     <TextArea value={this.state.note} onChange={this.handleInputChange} name="note" placeholder="Enter a note for the property (Optional)" />
                     <FormBtn onClick={this.handleSubmitInput}>Add Property</FormBtn>
                 </form>}
                </Col>         
            </Row>
        </Container>
    );
  }
}
export default Home;
