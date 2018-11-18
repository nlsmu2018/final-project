import React, {Component} from 'react';
import API from '../../utils/users';
import Background from "../../components/Background/Background";
import { Col, Row, Container } from "../../components/Grid";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

class Portfolio extends Component {
    state = {
        username:"",
        password:""
    }
    handleLogin = (event) => {
        event.preventDefault();
        console.log("I'm signing up baby", this.state);
        API.login(this.state).then(function(response){
            console.log(response);
        })
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <div>
                <Background style={{}} backgroundImage="https://image.shutterstock.com/image-photo/property-real-estate-market-game-260nw-239874865.jpg">

                    <h1>Real Estate Portfolio</h1>
                    <h3>Simple and Convenient Management of Your Assets</h3>

                </Background>




 <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
          <h4>
                        Here comes some text about the purpose of the app and how to better use it.
                        Or Anything else to fill up the space!!!
                    </h4>
                    <p>
                        Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada
                        molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi
                        hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh
                        porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam
                        blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta
                        augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
                    </p>
               
          </Col>
          <Col size="md-6 sm-12">
         
            <h4>Get Started:</h4>
            <SignUp>Sign Up</SignUp>
            <Login>Login</Login>

          </Col>
        </Row>
      </Container>  
            </div>
        )
    }
}
export default Portfolio;