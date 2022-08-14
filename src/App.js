import React, { Component } from 'react'
import { loop } from "./extension.js";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { gamestate: "Positive", color: "btn-success", lim: 4 }
    this.push = this.push.bind(this)
    this.pop = this.pop.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    if (this.state.gamestate === "Positive") {
      this.setState({ gamestate: "Negative", color: "btn-danger" })
    }
    else {
      this.setState({ gamestate: "Positive", color: "btn-success" })
    }
  }

  push() {
    this.setState({ lim: this.state.lim + 1 })
  }

  pop() {
    if (this.state.lim > 1) {
      this.setState({ lim: this.state.lim - 1 })
    }
  }

  render() {
    return (
      <>
        <div className='container-fluid'>
          <div className='container'>
            <div className="card">
              <div className="card-header">
                React App
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {loop(this.state.lim)}
                </h5>
                <p className="card-text">
                </p>
                <button className={"btn " + this.state.color} onClick={this.toggle}>
                  {this.state.gamestate}
                </button>
                <br />
                <button type="button" class="btn btn-primary" onClick={this.push}>Push</button>
                <button type="button" class="btn btn-secondary" onClick={this.pop}>Pop</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App

