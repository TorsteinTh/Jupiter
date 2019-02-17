import React, { Component } from 'react';
import './App.css';


import CheckElem from "./components/Checkelem"
import Checklist from "./components/Checklist"
import { Button } from "react-bootstrap"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkElemList: [],
      newElemValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addCheckelem = this.addCheckelem.bind(this)
    this.deleteCheckelem = this.deleteCheckelem.bind(this)
    this.editCheckelem = this.editCheckelem.bind(this)
  }

  handleChange = e => {
    this.setState({
      newElemValue: e.target.value,
    })
  }
  addCheckelem = () => {
    if (this.state.newElemValue != '') {
      const elem = { value: this.state.newElemValue, edit: false }
      this.setState({
        checkElemList: [...this.state.checkElemList, elem],
        newElemValue: ''
      })
    }
  }
  deleteCheckelem = e => {
    const update = this.state.checkElemList.filter(item => item != e)
    this.setState({
      checkElemList: update
    })
  }

  willEditCheckelem = e => {
    const array = this.state.checkElemList
    for (var i in array) {
      if (array[i].value === e.value) {
        array[i].edit = array[i].edit === true ? false : true
      }
    }
    this.setState({
      checkElemList: array
    })
  }

  editCheckelem = (editValue, oldValue) => {
    const array = this.state.checkElemList
    for (var i in array) {
      if (array[i].value === oldValue) {
        array[i].value = editValue
        array[i].edit = array[i].edit === true ? false : true
      }
    }
    this.setState({
      checkElemList: array
    })
    console.log("editing")
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addCheckelem(e)

  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newElemValue} onChange={this.handleChange} autoFocus />
          <Button className="btn btn-outline-primary" onClick={this.addCheckelem}>Add</Button>
        </form>

        <Checklist
          items={this.state.checkElemList}
          editCheckelem={this.editCheckelem}
          willEditCheckelem={this.willEditCheckelem}
          deleteCheckelem={this.deleteCheckelem}>
        </Checklist>

      </div>
    );
  }
}

export default App;
