import React, { Component } from "react";
import axios from "axios";

class DeleteUser extends Component {
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
        .delete(`//localhost:8080/ClassroomAPI/api/classroom/deleteUser/${customerId}`)
        .then(res => {
          console.log(res);

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
          <h1>Delete User by Customer ID</h1>
        </header>

        <p>Please enter the CustomerID of the User to be deleted.</p>
        <input type="text" name="customerId" />

        <button>Delete User</button>


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

export default DeleteUser;
