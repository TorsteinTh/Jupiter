import React, { Component } from "react"
import styled from "styled-components"

import { Button } from "react-bootstrap"
import Checkelem from "./Checkelem.js"



class Checklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        var items = this.props.items.map((item, index) => {
            console.log(this.props.items.indexOf(item))
            return (
                <Checkelem
                    key={index}
                    item={item}
                    index={index}
                    edit={this.props.edit}
                    removeItem={this.props.removeItem}
                    editCheckelem={this.props.editCheckelem}
                    willEditCheckelem={this.props.willEditCheckelem}
                    deleteCheckelem={this.props.deleteCheckelem}
                />
            );
        });
        return (
            <ul className="list-group">
                {items}
            </ul>


        );
    }
}

export default Checklist;
