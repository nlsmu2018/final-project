import React, { Component } from "react";
import Card from "../../components/Card";
import EditBtn from "../../components/EditBtn";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import EditProperty from "../../components/Edit/Edit";
//import Wrapper from "../../components/Wrapper";

export default class Properties extends Component {
  state = {
    properties: [],
    property: {},
    loaded:false
  };

  componentDidMount() {
    this.loadProperties();
    this.state ={loaded:false}
  }

  loadProperties = () => {
    API.getProperties()
      .then((res) => {
        console.log('return from loadProperties fct ' + res.data[0]._id)
        this.setState({ properties:res.data})
      })
      .catch(err => console.log(err));
      
  };

  viewPropertyDetails = (id) => {
    API.getProperty(id)
    .then((res) => {
      console.log(res.data)
     this.setState({property:res.data});
     console.log('state update' + this.state.property.country)
    })
    .catch(err => console.log(err));

  }

  loadCard = () => {
    this.setState({loaded: true})
  }

  displayProperty = () => {
    this.loadCard();

  }

  deleteProperty = (id) => {
    API.deleteProperty(id)
    .then((res) => {
      this.loadProperties()
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
          <h4>Your Properties</h4>
          
           
                {this.state.properties.map(property => (
                  <EditProperty key={property._id}>
                    <a href={"/properties/" + property._id}>
                      <strong>
                        {property.address}
                      </strong>
                    </a>
                    <p>
                        {property.beds} beds   
                        {property.baths} baths   
                        {property.sqft} sqft   
                    </p>
                    {/* <ViewBtn onClick={() => this.viewPropertyDetails(property._id)} /> */}
                    <EditBtn onClick={() => 
                      {
                        this.loadCard();
                        this.viewPropertyDetails(property._id);
                      }} />
                    <DeleteBtn onClick={() => this.deleteProperty(property._id)} />
                  </EditProperty>
                ))}
               

          </Col>
          <Col size="md-6 sm-12">
          {this.state.loaded &&
          <Card
          country={this.state.property.country}
          address={this.state.property.address}
          city={this.state.property.city}
          zipcode={this.state.property.zipcode}
          state={this.state.property.state}
          beds={this.state.property.beds}
          baths={this.state.property.baths}
          sqft={this.state.property.sqft}
          note={this.state.property.note}

        ></Card>}
          </Col>
        </Row>
      </Container>
    );
  }
}


//                     {this.state.properties.length ? (
//               <List>
// {/* <Wrapper> */}
//                 {this.state.properties.map(property => (
//                   <ListItem key={property._id}>
//                     <a href={"/properties/" + property._id}>
//                       <strong>
//                         {property.address}
//                       </strong>
//                     </a>
//                     <p>
//                         {property.beds} beds   
//                         {property.baths} baths   
//                         {property.sqft} sqft   
//                     </p>
//                     {/* <ViewBtn onClick={() => this.viewPropertyDetails(property._id)} /> */}
//                     <EditBtn onClick={() => 
//                       {
//                         this.loadCard();
//                         this.viewPropertyDetails(property._id);
//                       }} />
//                     <DeleteBtn onClick={() => this.deleteProperty(property._id)} />
//                   </ListItem>
//                 ))}
//                 {/* </Wrapper> */}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}