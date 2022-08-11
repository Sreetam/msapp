import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { gamestate: "Positive", color: "btn-success" }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.state.gamestate === "Positive") {
      this.setState({ gamestate: "Negative", color: "btn-danger" })
    }
    else {
      this.setState({ gamestate: "Positive", color: "btn-success" })
    }
  }

  render() {
    return (
      <>
        <div className='container-fluid'>
          <div className='container'>
            <div className="card">
              <div className="card-header">
                Trinity
              </div>
              <div className="card-body">
                <h5 className="card-title">React App</h5>
                <p className="card-text">Out Content</p>
                <button className={"btn " + this.state.color} onClick={this.handleClick}>
                  {this.state.gamestate}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App

