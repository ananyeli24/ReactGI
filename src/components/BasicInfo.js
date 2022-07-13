import React, { Component } from 'react'

export default class BasicInfo extends Component {
  render() {

    return (
      <div>
          <h1>{this.props.Date}</h1>
        <h2> {this.props.Name}</h2>
        <p>{this.props.Number}</p>
      </div>
    )
  }
}

