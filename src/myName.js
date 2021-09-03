import React, { Component } from 'react';

class MyName extends Component {
  // static defaultProps = {
  //   name: 'defaultName'
  // }
  render() {
    return (
      <div>
        Hello my name is <b>{this.props.name}</b>
      </div>
    );
  }
}

MyName.defaultProps = {
  name: 'Default Name'
};

export default MyName;
