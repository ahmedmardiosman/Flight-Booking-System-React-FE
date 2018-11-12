// import React, { Component } from 'react'
// import axios from 'axios'

// class Search extends Component{

// constructor(props){
//     super(props);
//     this.state = {user: ''};
//     this.state = {postcode: ''};
 

// }

//       getUser = (e) => {
//         e.preventDefault();
//         this.setState({user: e.target.value});

//         if (this.state.user){

//         axios
//           .get(`//localhost:8080/ClassroomAPI/api/classroom/getUser/${this.state.user}`)
//           .then(res => {
//             console.log(res);

//             const postcode = res.data.postcode;
//             this.setState({ postcode });
//             const userName = res.data.userName;
//             this.setState({ userName });
//           });
//         }else return;
//       };

//       render() {
//         return (
//             <form>
//             {/* <input
//               style={{ margin: "20px auto", display: "block" }}
//               type="text"
//               name="username"
//             /> */}
//             <p>Please enter your CustomerID.</p>
//             <input type="text"  value={this.state.user} onChange={this.getUser} />


//  {this.state.userName ?  <p>Username: {this.state.userName}</p>: <p></p>}

//             {this.state.postcode ?  <p>Postcode: {this.state.postcode}</p> :
//      <p>{/* replaces the place were the postcode will apear Please enter your CustomerID.*/}</p>}

//           </form>
//         )
//       }

// }

// export default Search;

import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
    this.state = { postcode: "" };
  }

  getUser = e => {
    e.preventDefault();

    const customerId = e.target.elements.customerId.value;

    if (customerId) {
      axios
        .get(`//localhost:8080/ClassroomAPI/api/classroom/getUser/${customerId}`)
        .then(res => {
          console.log(res);

          const userName = res.data.userName;
          this.setState({ userName });
          const firstName = res.data.firstName;
          this.setState({ firstName });
          const secondName = res.data.secondName;
          this.setState({ secondName });
          const adressLine1 = res.data.adressLine1;
          this.setState({ adressLine1 });
          const adressLine2 = res.data.adressLine2;
          this.setState({ adressLine2 });
          const postcode = res.data.postcode;
          this.setState({ postcode });
          const townOrCity = res.data.townOrCity;
          this.setState({ townOrCity });
          const telephoneNumber = res.data.telephoneNumber;
          this.setState({ telephoneNumber });
          const email = res.data.email;
          this.setState({ email });
          const password = res.data.password;
          this.setState({ password });
      
        });
    } else return;
  };

  render() {
    return (
      <form onSubmit={this.getUser}>
        {/* <input
              style={{ margin: "20px auto", display: "block" }}
              type="text"
              name="username"
            /> */}

<header>
          <h1>Search for User by Customer ID</h1>
        </header>

        <p>Please enter a CustomerID.</p>
        <input type="text" name="customerId" />

        <button>Search</button>

        {this.state.userName ? <p>Username : {this.state.userName}</p> : <p />}
        {this.state.firstName ? <p>FirstName : {this.state.firstName}</p> : <p />}
        {this.state.secondName ? <p>secondName : {this.state.secondName}</p> : <p />}
        {this.state.adressLine1 ? <p>AdressLine1 : {this.state.adressLine1}</p> : <p />}
        {this.state.adressLine2 ? <p>AdressLine2 : {this.state.adressLine2}</p> : <p />}
        {this.state.postcode ? <p>Postcode : {this.state.postcode}</p> : <p />}
        {this.state.townOrCity ? <p>TownOrCity : {this.state.townOrCity}</p> : <p />}
        {this.state.telephoneNumber ? <p>TelephoneNumber : {this.state.telephoneNumber}</p> : <p />}
{this.state.email ? <p>Email : {this.state.email}</p> : <p />}
{this.state.password ? <p>Password : {this.state.password}</p> : <p />}

        {/* {this.state.postcode ? (
          <p>Postcode: {this.state.postcode}</p>
        ) : (
          <p>
             replaces the place were the postcode will apear Please enter your CustomerID.
          </p>
        )} */}
      </form>
    );
  }
}

export default Search;
