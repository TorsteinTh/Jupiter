import React, { Component } from "react"
import styled from "styled-components"

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
    componentWillReceiveProps(nextProps) {
        if (nextProps.editvalue !== this.state.editvalue) {
            this.setState({ editvalue: nextProps.item.value });
        }
    }

    onChangeEdit = e => {
        this.setState({
            editvalue: e.target.value
        })
    }

    onDelete = () => {
        const item = this.props.index
        this.props.deleteCheckelem(item)
    }

    willEdit = () => {
        const item = this.props.item
        this.props.willEditCheckelem(item)
    }

    submitChange = () => {
        const old = this.props.item
        const New = this.state.editvalue
        this.props.editCheckelem(New, old)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.submitChange()

    }

    render() {
        return (
            <div onDoubleClick={this.willEdit}>
                <CheckElem>
                    <Content>
                        {this.props.item.edit ? (
                            <form onSubmit={this.handleSubmit}>
                                <input value={this.state.editvalue} onChange={this.onChangeEdit} autoFocus onBlur={this.handleSubmit} />
                            </form>
                        ) : (
                                <div>
                                    {this.props.item.value}
                                </div>
                            )}
                    </Content>

                    {!this.props.item.edit && (
                        <Buttons>
                            <button className="editButton" onClick={this.willEdit}>Edit</button>
                            <button className="deleteButton" onClick={this.onDelete}><span>Delete</span></button>
                        </Buttons>
                    )}
                </CheckElem>

            </div >

        )
    }
}

export default Checkelem;

const CheckElem = styled.div`
            display: grid
            grid-template-columns: 70% 30% ;
            align-items: center
            background-color: #87CEFA
            border-radius: 10px;
            min-height: 28px
            height: auto
            border: 2px solid white;
        `;

const Content = styled.div`
            width: 100%
        `;

const Buttons = styled.div`
            align-items: center
            display: grid
            grid-template-columns: 45% 45% ;

            .editButton {
                background-color: #FFD700;
                flex-direction: column;
                align-items: center;
            
                border-radius: 5px;
                border: 2px solid #fff;
                transition-duration: 0.6s;
                
                :hover {
                  background-color: FF8C00;
                  border: 2px solid green;
                  color: #white;

                }
            }
            .deleteButton {
                background-color: #FF0000;
                flex-direction: column;
                align-items: center;
            
                border-radius: 5px;
                border: 2px solid #fff;
                transition-duration: 0.6s;
            
                :hover {
                    span {display:none}
                    :before {content:"X"}
                    background-color: darkred;
                    color: white;
                    border: 2px solid darkred;

                }
            }
`;