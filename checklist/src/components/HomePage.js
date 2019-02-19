import React, { Component } from 'react';

import styled from "styled-components";
import Checklist from "./Checklist"


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkElemList: [],
            newElemValue: '',
            elemId: 0
        }
    }

    handleChange = e => {
        this.setState({
            newElemValue: e.target.value,
        })
    }
    addCheckelem = () => {
        if (this.state.newElemValue !== '') {
            const elem = { value: this.state.newElemValue, edit: false, elemId: this.state.elemId }
            this.setState({
                checkElemList: [...this.state.checkElemList, elem],
                newElemValue: '',
                elemId: this.state.elemId + 1

            })
        }
    }
    deleteCheckelem = elemId => {
        const update = this.state.checkElemList.filter(item => item.elemId !== elemId)
        console.log(update)
        this.setState({
            checkElemList: update
        })
    }

    willEditCheckelem = e => {
        const array = this.state.checkElemList
        for (var i in array) {
            if (array[i].elemId === e.elemId) {
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
            if (array[i].elemId === oldValue.elemId) {
                array[i].value = editValue
                array[i].edit = array[i].edit === true ? false : true
            }
        }
        this.setState({
            checkElemList: array
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.addCheckelem(e)

    }

    render() {
        return (
            <AppDiv className="App">
                <h1>TODO APP</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter here" value={this.state.newElemValue} onChange={this.handleChange} autoFocus />
                    <button className="AddButton" onClick={this.addCheckelem}>Add</button>
                </form>

                <h2>Your's TODO: </h2>
                <ElementList>
                    {this.state.checkElemList.length === 0 ?
                        (
                            <div>
                                <p>Looks like you have nothing to do :) </p>
                            </div>
                        ) : (
                            <Checklist
                                items={this.state.checkElemList}
                                editCheckelem={this.editCheckelem}
                                willEditCheckelem={this.willEditCheckelem}
                                deleteCheckelem={this.deleteCheckelem}>
                            </Checklist>
                        )
                    }
                </ElementList>
            </AppDiv>
        );
    }
}

export default HomePage;

const AppDiv = styled.div`
  display: grid
  height: 100%
  width: 100%

  .AddButton{
      margin-left: 5px
      font-size: 18px;
      background-color: #7FFF00;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      border: 2px solid #fff;
      transition-duration: 0.6s;
  
      :hover {
        background-color: darkgreen;
        color: white;
        border: 2px solid #00FF00;
      }
  }
`;

const ElementList = styled.div`
  display: grid
  width: 100%
  align-item: center
`;