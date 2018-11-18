import React from 'react';
//import Hero from "../../components/Hero/Hero";

const Login = () => {
    return(
       <div>Reports PAge</div>
    )
}

export default Login;


// import React, {Component} from 'react';
// import API from '../api/users.js';

// export default class Login extends Component {
//     state = {
//         username:"",
//         password:""
//     }
//     handleLogin = (event) => {
//         event.preventDefault();
//         console.log("I'm signing up baby", this.state);
//         API.login(this.state).then(function(response){
//             console.log(response);
//         })
//     }
//     captureInput = (event) => {
//         this.setState({
//             [event.target.name]:event.target.value
//         })
//     }
//     render(){
//         return(
//             <form>
//                 <input onChange={this.captureInput} name="username"/>
//                 <input onChange={this.captureInput} name="password"/>
//                 <button onClick={this.handleLogin}>Submit</button>
//             </form>
//         )
//     }
// }