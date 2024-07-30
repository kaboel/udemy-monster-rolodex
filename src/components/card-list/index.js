import { Component } from 'react'

class CardList extends Component {
  render() {
    const { monsters } = this.props

    return (
      <>
        {monsters.map((monster, index) => {
          return (
            <div key={index}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </>
    )
  }
}

export default CardList
