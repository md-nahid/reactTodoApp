import React, { Component } from 'react'
import Todo from "./component/Todo"
import "./App.scss"

class App extends Component {

  render() {
    return (
      <div>
        <h1>This is a Simple Todo App</h1>
        <div className="main">
          <Todo />
        </div>
      </div>
    )
  }
}






export default App