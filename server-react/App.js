import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        Hello
        <hr/>
        <div>first Name: <input/></div>
        <div>Last Name: <input/></div>
        <div>Email: <input/></div>
        <button>Submit</button>

      </div>
    )
  }
}

export default App
