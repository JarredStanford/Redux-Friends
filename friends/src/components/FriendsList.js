import React from "react";
import { connect } from "react-redux";

import { fetchDataStart, addFriend } from "../actions";

import Friend from "./Friend";

class FriendsList extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    this.props.fetchDataStart();
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    };
    this.props.addFriend(newFriend);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.postFriend}>
          <input
            placeholder="Name"
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
          />
          <input
            placeholder="Age"
            onChange={this.handleChanges}
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            placeholder="Email"
            onChange={this.handleChanges}
            value={this.state.email}
            name="email"
            type="email"
          />
          <button>Add Friend</button>
        </form>
        <div>
          {this.props.friends.map(friend => {
            return <Friend friend={friend} key={friend.id} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: ""
  };
};

export default connect(
  mapStateToProps,
  { fetchDataStart, addFriend }
)(FriendsList);
