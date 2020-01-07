import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class Todos extends Component {
    state = {
        text: this.props.todo.text,
        order: this.props.todo.order
    };

    handleChange = event => {
        if (event.target.name === 'text') {
        }
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleOrder = event => {
        event.preventDefault();
        if (event.target.name === 'order') {
            this.setState({
                order: (parseInt(event.target.value) ? parseInt(event.target.value) : '')
            });
        }
    }
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5px 30px" }}>
                <input
                    name="order"
                    onChange={this.handleOrder}
                    value={this.state.order}
                    placeholder="Order text"
                    onKeyPress={(e) => this.props.setOrder(e, this.props.todo.id, this.state.order)}
                />
                {(
                    () => {
                        if (this.props.todo.edit === true) {
                            return (
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0 30px" }}>
                                    {/* <form onSubmit={() => this.props.submitNewText(this.props.todo.id, this.state.text)}> */}
                                    <input
                                        name="text"
                                        onChange={this.handleChange}
                                        value={this.state.text}
                                        placeholder="Todo Text"
                                        onKeyPress={(e) => this.props.submitNewText(this.props.todo.id, this.state.text, e)}
                                    />
                                    {/* </form> */}
                                    <div>
                                        <Button color="success" type="submit" onClick={(e) => this.props.submitNewText(this.props.todo.id, this.state.text, e)}>save</Button>
                                        <Button color="secondary" onClick={this.props.onEdit}>cancle</Button>
                                    </div>
                                </div>
                            )
                        }
                        else if (this.props.todo.edit === false) {
                            return (
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0 30px" }}>
                                    <div
                                        style={{
                                            textDecoration: this.props.todo.complete ? "line-through" : ""
                                        }}
                                        onClick={this.props.toggleComplete}
                                    >
                                        <h5>{this.props.todo.text}</h5>
                                    </div>
                                    <div style={{ padding: "0 30px" }}>
                                        <Button color="warning" onClick={this.props.onEdit}>edit</Button>
                                        <Button color="danger" onClick={this.props.onDelete}>X</Button>
                                    </div>
                                </div>
                            )
                        }
                    }
                )()
                }
            </div>
        )
    }
}

