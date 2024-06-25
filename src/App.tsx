import './App.css';
// import { Component } from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utilities/data.utils';

export type User = {
  id: string;
  name: string;
  email: string;
}

export default function App() {
  const [monsters, setMonsters] = useState<User[]>([]);
  const [searchString, setSearchString] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Array<User>>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }
    fetchUsers()
  }, [])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchString(searchFieldString)
  }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchString])

  return (
    <div className="App">
      <h1 className='app-title'>Jas Rolodex</h1>
      <SearchBox className={'monsters-search-box'} onChangeHandler={onSearchChange} placeholder={'Search Monsters'}/>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: ''
//     }
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchString }
//     })
//   }

//   componentDidMount() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       }))
//   }

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString)
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Jas Rolodex</h1>
//         <SearchBox className={'monsters-search-box'} onChangeHandler={onSearchChange} placeholder={'Search Monsters'}/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
