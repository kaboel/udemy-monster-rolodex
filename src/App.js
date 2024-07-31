import { Component } from 'react'
import './App.css'

import SearchBox from './components/search-box'
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
        this.setState(() => {
          return { monsters: users }
        })
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
      return monster.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase())
    })

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>

        <SearchBox
          className="monster"
          onChange={handleSearchChange}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
