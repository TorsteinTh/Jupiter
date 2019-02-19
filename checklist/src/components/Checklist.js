import React, { Component } from "react"
import styled from "styled-components"

import Checkelem from "./Checkelem.js"



class Checklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        var items = this.props.items.map((item, index) => {
            console.log(item)
            return (
                <Checkelem
                    key={index}
                    item={item}
                    index={item.elemId}
                    edit={this.props.edit}
                    removeItem={this.props.removeItem}
                    editCheckelem={this.props.editCheckelem}
                    willEditCheckelem={this.props.willEditCheckelem}
                    deleteCheckelem={this.props.deleteCheckelem}
                />
            );
        });
        return (
            <StyleList className="list-group">
                {items}
            </StyleList>


        );
    }
}

export default Checklist;

const StyleList = styled.ul`
    padding-left: 30%
    padding-right: 30%
`;