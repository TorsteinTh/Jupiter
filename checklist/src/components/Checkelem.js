import React, { Component } from "react"

import { Button } from "react-bootstrap"



class Checkelem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editvalue: '',
            editindex: 0

        }
    }
    componentDidMount = () => {
        this.setState({
            editvalue: this.props.item.value,
            editindex: this.props.index
        })
    }

    onChangeEdit = e => {
        this.setState({
            editvalue: e.target.value
        })
    }

    onDelete = () => {
        const item = this.props.item
        this.props.deleteCheckelem(item)
    }

    willEdit = () => {
        const item = this.props.item
        this.props.willEditCheckelem(item)
    }

    submitChange = () => {
        const oldValue = this.props.item.value
        const editvalue = this.state.editvalue
        this.props.editCheckelem(editvalue, oldValue)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.submitChange()

    }

    render() {
        return (
            <div>
                {this.props.item.edit && (
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.editvalue} onChange={this.onChangeEdit} autoFocus />
                        <Button className="btn btn-outline-primary" onClick={this.submitChange}>Submit change</Button>

                    </form>
                )}
                {!this.props.item.edit && (
                    <div>
                        {this.props.item.value}
                        <Button className="btn btn-outline-primary" onClick={this.willEdit}>Edit</Button>
                        <Button className="btn btn-outline-primary" onClick={this.onDelete}>Delete</Button>
                    </div>
                )}
            </div >

        )
    }
}

export default Checkelem;
