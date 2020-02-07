import React, { Component } from "react";

export default class AddPhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      suggesstions: [],
      name: "",
      phone: null,
      users: [],
      user: {
        name: "",
        phone: null
      }
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  onChange = e => {
    //this.setState({[e.target.name]: e.target.innerText});
  };

  nameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    let newSuggesstion = [];
    if (e.target.value.length > 0) {
      newSuggesstion = this.state.posts.filter(post => {
        return post.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
    }
    this.setState({ suggesstions: newSuggesstion });
    //console.log(this.state.suggesstions);
  };

  clickName = e => {
    let name = e.target.innerText;
    this.setState(
      {
        name,
        suggesstions: [],
        user: {
          name
        }
      },
      () => {
        //console.log("name", this.state.user);
      }
    );
    //console.log("name", this.state.user);
  };
  phoneChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        user: {
          ...this.state.user,
          phone: e.target.value
        }
      },
      () => {
        //console.log("user", this.state.user);
      }
    );
  };

  submit = e => {
    const user = this.state.user;
    this.setState(
      {
        users: [...this.state.users, user]
      },
      () => {
        //console.log("users", this.state.users);
      }
    );
  };
  delUser = i => {
    let newUsers = [...this.state.users];
    newUsers.splice(i, 1);
    this.setState(state => ({
      users: newUsers
    }));
  };

  render() {
    //console.log(this.state.posts);
    console.log(this.state.users);

    const showSuggesstions = this.state.suggesstions.map(s => (
      <div key={s.id}>
        <p onClick={this.clickName}>{s.name}</p>
      </div>
    ));
    const showUsers = this.state.users.map((u, i) => (
      <div key={i} style={{ borderStyle: "groove" }}>
        <p>name: {u.name}</p>
        <p>phone:{u.phone}</p>
        <button onClick={this.delUser}>X</button>
      </div>
    ));
    return (
      <div>
        <div>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.nameChange}
              value={this.state.name}
            />
          </div>

          {showSuggesstions}
          <br />
          <div>
            <label>Add Phone Number: </label>
            <br />
            <input
              type="number"
              name="phone"
              onChange={this.phoneChange}
              value={this.state.phoneNumber}
            />
          </div>
          <br />
          <button type="submit" onClick={this.submit}>
            Submit
          </button>
        </div>

        <div>
          <h5>Info:</h5>
          {showUsers}
          <hr />
        </div>
      </div>
    );
  }
}
