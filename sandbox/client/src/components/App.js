import { Component } from 'react'
import axios from 'axios'

import Card from './shared/Card'
import List from './List'

// component routing logic
class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      pokemon: []
    }
  }

  handleIncirement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  // mounting => rendered for the first time
  // the first time a component is displayed on the DOM
  // AJAX
  // [Object: object]
  fetchPokemonList = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        // handle success
        console.log(res);
        this.setState({
          pokemon: res.data.results
        });
      })
      .catch((err) => {
        // handle error
        console.log(err);
      })

    // // const getPokemon = async () => {}
    // async function getPokemon() {
    //   try {
    //     const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //     console.log(res);
    //     this.setState({
    //       pokemon: res.data.results
    //     });
    //   } catch (err) {
    //     // console.log(err)
    //   }
    // }
  }

  componentDidMount() {
    this.fetchPokemonList()
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div style={{
          border: 'solid 2px black',
          width: '172px',
          margin: '8px',
          padding: '4px',
          textAlign: 'center'
        }}>
          {this.state.count}
        </div>
        <div>
          <Card
            handleIncirement={this.handleIncirement}
            cardBckColor='lightGrey'
            btnText='add one'
            btnBckColor='lightCoral' />
          <Card
            cardBckColor='lightGrey'
            btnText='subtract one'
            btnBckColor='lightBlue' />
          <Card
            cardBckColor='lightGrey'
            btnText='alert me'
            btnBckColor='lightGreen' />
        </div>
        <div>
          <List />
        </div>
      </>
    );
  }
}

export default App;
