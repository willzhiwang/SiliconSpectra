import React, { Component, Fragment } from "react";

class PhoneEmailFormClass extends Component {
  state = {
    code: "001-",
    phone: "",
    email: "",
    context: [],
    error: false,
  };

  chooseCode = (e) => {
    this.setState({ code: e.target.value });
  };

  handlePhoneNum = (e) => {
    let number = e.target.value.substring(4);
    console.log(number);

    this.setState({ phone: number });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  checkEmail = () => {
    if (this.state.email.includes("@") && this.state.email.includes(".")) {
      const newContext = { phone: this.state.phone, email: this.state.email };
      console.log(newContext);
      this.setState((state) => ({
        error: false,
        phone: "",
        email: "",
        context: [...this.state.context, newContext],
      }));
    } else {
      this.setState((state) => ({
        error: true,
      }));
    }
  };
  render() {
    let details;

    if (this.state.error) {
      details = <p color="red">The email address is invalid</p>;
    } else {
      details = (
        <div>
          {this.state.context.map((c, i) => (
            <div key={i}>
              <p>{c.phone}</p>
              <p>{c.email}</p>
            </div>
          ))}
        </div>
      );
    }
    console.log(this.state.context);

    return (
      <Fragment>
        <select onChange={this.chooseCode}>
          <option value={"001-"}>CHINA</option>
          <option value={"002-"}>USA</option>
          <option value={"003-"}>JAPAN</option>
        </select>
        <input
          value={this.state.code + this.state.phone}
          onChange={this.handlePhoneNum}
          placeholder={"phone number"}
        />
        <input
          value={this.state.email}
          onChange={this.handleEmailChange}
          placeholder={"email address"}
          type="email"
        />
        <button onClick={this.checkEmail}>SUBMIT</button>
        {details}
      </Fragment>
    );
  }
}

export default PhoneEmailFormClass;
