import React, { Component } from "react";

import "./App.css";

import Search from "./components/GetUserData"

import AddUser from "./components/CreateUser";

import DeleteUser from "./components/DeleteUser";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <AddUser />
        <DeleteUser/>
      </div>
    );
  }
}

export default App;

// export default App;

// import React, { Component } from "react";

// import axios from "axios";

// import "./App.css";

// import UserForm from "./components/UserForm";

// class App extends Component {
//   state = {
//     postcode: null
//   };
//   getUser = (e) => {
//     e.preventDefault();

//     const user = e.target.elements.username.value;
//     //192.168.1.153

//     //will allow user to press submit without doing anything

//     if (user){

//     axios
//       .get(`//localhost:8080/ClassroomAPI/api/classroom/getUser/${user}`)
//       .then(res => {
//         console.log(res);

//         const postcode = res.data.postcode;
//         this.setState({ postcode });
//       });
//     }else return;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>

//         <UserForm getUser={this.getUser} />
//         {this.state.postcode ?  <p>Postcode: {this.state.postcode}</p> :
//     <p>Please enter your CustomerID.</p>}
//       </div>
//     );
//   }
// }

// export default App;
