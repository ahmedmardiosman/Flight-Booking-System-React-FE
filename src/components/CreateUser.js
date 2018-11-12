import React, { Component } from "react";
import axios from "axios";

class AddUser extends Component {
  addUser = e => {
    e.preventDefault();

    const userName = e.target.elements.username.value;
    const firstName = e.target.elements.firstname.value;
    const secondName = e.target.elements.secondname.value;
    const adressLine1 = e.target.elements.adressline1.value;
    const adressLine2 = e.target.elements.adressline2.value;
    const postcode = e.target.elements.postcode.value;
    const townOrCity = e.target.elements.townorcity.value;
    const telephoneNumber = e.target.elements.telephonenumber.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;


    if (
      userName &&
      firstName &&
      secondName &&
      adressLine1 &&
      adressLine2 &&
      postcode &&
      townOrCity &&
      telephoneNumber &&
      email &&
      password
    ) {
      axios
        .post(` http://localhost:8080/ClassroomAPI/api/classroom/createUser`, {
          userName,
          firstName,
          secondName,
          adressLine1,
      adressLine2,
      postcode,
      townOrCity,
      telephoneNumber,
      email,
      password
        })
        .then(res => {
          console.log(res);
        });
    } else return;
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <header>
          <h1>Add a User</h1>
        </header>
        Please enter your desired username : <input type="text" name="username" />
        <br />
        Please enter your first name : <input type="text" name="firstname" />
        <br />
        Please enter your second name : <input type="text" name="secondname" />
        <br />
        Please enter your first adress line : <input type="text" name="adressline1" />
        <br />
        Please enter your second adress line : <input type="text" name="adressline2" />
        <br />
        Please enter your postcode : <input type="text" name="postcode" />
        <br />
        Please enter your Town or City : <input type="text" name="townorcity" />
        <br />
        Please enter your telephone number : <input type="text" name="telephonenumber" />
        <br />
        Please enter your email : <input type="text" name="email" />
        <br />
        Please enter your password : <input type="text" name="password" />


        <button>Add User</button>
      </form>
    );
  }
}

export default AddUser;
