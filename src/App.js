import { useEffect, useState } from 'react'

import SearchBox from './components/search-box'
import CardList from './components/card-list'
import './App.css'

const App = () => {
  const [query, setQuery] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(query)
    })
    setFilteredMonsters(filteredMonsters)
  }, [monsters, query])

  const handleSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    setQuery(searchField)
  }

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

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users }
//         })
//       )
//   }

//   handleSearchChange = (event) => {
//     const searchField = event.target.value
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state
//     const { handleSearchChange } = this
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name
//         .toLocaleLowerCase()
//         .includes(searchField.toLocaleLowerCase())
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>

//         <SearchBox
//           className="monster"
//           onChange={handleSearchChange}
//           placeholder="Search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }

export default App
