import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
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

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monster"
          onChange={(event) => {
            const keyword = event.target.value
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.includes(keyword)
            })

            this.setState(() => {
              return { monsters: filteredMonsters }
            })
          }}
        />
        {this.state.monsters.map((monster, index) => {
          return (
            <div key={index}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
