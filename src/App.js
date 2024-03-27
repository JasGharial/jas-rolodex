import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }))
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchString)
    })

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monsters' onChange={(event) => {
          const searchString = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return { searchString }
          })
        }} />
        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1 >{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
