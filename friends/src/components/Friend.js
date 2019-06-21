import React from "react";

class Friend extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.friend.name}</h1>
        <h2>{this.props.friend.age}</h2>
        <p>{this.props.friend.email}</p>
      </div>
    );
  }
}

export default Friend;
