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
    console.log(this.state.suggesstions);
  };

  clickName = e => {
    let newName = e.target.innerText;
    console.log(newName);
    this.setState({
      name: newName,
      suggesstions: []
    });
    console.log(this.state.name);

    this.setState(state => ({
      user: {
        name: this.state.name
      }
    }));
  };

  submit = () => {};

  render() {
    //console.log(this.state.posts);
    console.log(this.state.user);

    const showSuggesstions = this.state.suggesstions.map(s => (
      <div key={s.id}>
        <p onClick={this.clickName}>{s.name}</p>
      </div>
    ));
    return (
      <div>
        <form>
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
            <textarea
              type="text"
              name="phoneNumber"
              onChange={this.onChange}
              value={this.state.phoneNumber}
            />
          </div>
          <br />
          <button type="submit" onClick={() => this.submit}>
            Submit
          </button>
        </form>
        <div>
          <h5>Info:</h5>
          <p>name: </p>
          <p>phone:</p>
        </div>
      </div>
    );
  }
}
