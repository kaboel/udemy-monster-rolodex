import { Component } from 'react'
import './App.css'

import CardList from './components/card-list'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  handleSearchChange = (event) => {
    const searchField = event.target.value
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const { handleSearchChange } = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monster"
          onChange={handleSearchChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
