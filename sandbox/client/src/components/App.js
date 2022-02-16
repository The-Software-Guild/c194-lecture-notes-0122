import { Component } from 'react'

import Card from './shared/Card'

// component routing logic
class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    // binding of this in the constructor, do not so this anymore it is an anitattern
    // this.handleIncirement = this.handleIncirement.bind(this)
  }

  // IOI we ened to access this from within a method do we use
  // public class field syntax
  handleIncirement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  // lifecycle method it hooks into the component lifecycle and allows you to execute some code
  // upon the mounting of a compoentn
  componentDidMount() {
    // do something
  }

  render() {
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
      </>
    );
  }
}

export default App;
