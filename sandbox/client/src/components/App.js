import { Component } from 'react'

import Card from './shared/Card'
import List from './List'

// component routing logic
class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleIncirement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  componentDidMount() {

  }

  render() {
    console.log(List)
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
