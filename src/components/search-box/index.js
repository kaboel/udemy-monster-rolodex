import { Component } from 'react'
import './styles.css'

class SearchBox extends Component {
  render() {
    const { onChange: onChangeHandler, placeholder, className } = this.props

    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    )
  }
}

export default SearchBox
