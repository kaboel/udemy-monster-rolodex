import React, { Component } from 'react'
import './styles.css'

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster

    return (
      <div className="card-container">
        <img alt={name} src={`https://robohash.org/${id}?set=2`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}
