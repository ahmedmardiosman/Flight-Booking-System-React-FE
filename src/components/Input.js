// import React, { Component } from 'react'
// import axios from 'axios'

// class Search extends Component{

// constructor(props){
//     super(props);
//     this.state = {user: ''};
//     this.state = {postcode: ''};
//     this.getUser = this.getUser.bind(this);

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
//             <form onSubmit={this.getUser}>
//             {/* <input
//               style={{ margin: "20px auto", display: "block" }}
//               type="text"
//               name="username"
//             /> */}
//             <p>Please enter your CustomerID.</p>
//             <input type="text"  value={this.state.user} onChange={this.getUser} />

//             <button>Submit</button>

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

    const user = e.target.elements.username.value;

    if (user) {
      axios
        .get(`//localhost:8080/ClassroomAPI/api/classroom/getUser/${user}`)
        .then(res => {
          console.log(res);

          const postcode = res.data.postcode;
          this.setState({ postcode });
          const userName = res.data.userName;
          this.setState({ userName });
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
        <p>Please enter your CustomerID.</p>
        <input type="text" name="username" />

        <button>Submit</button>

        {this.state.userName ? <p>Username: {this.state.userName}</p> : <p />}

        {this.state.postcode ? (
          <p>Postcode: {this.state.postcode}</p>
        ) : (
          <p>
            {/* replaces the place were the postcode will apear Please enter your CustomerID.*/}
          </p>
        )}
      </form>
    );
  }
}

export default Search;
