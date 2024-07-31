import { Component } from 'react'
import Card from '../card'
import './styles.css'

class CardList extends Component {
  render() {
    const { monsters } = this.props

    return (
      <div className="card-list">
        {monsters.map((item, index) => (
          <Card key={index} monster={item} />
        ))}
      </div>
    )
  }
}

export default CardList
