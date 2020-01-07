import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
    state = {
        text: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.text !== '') {
            this.props.onSubmit({
                id: shortid.generate(),
                text: this.state.text,
                edit: false,
                complete: false,
                order: 1
            });
            this.setState({
                text: ""
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add:
                <input
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Add Todo"
                    />
                </h2>
            </form>
        );
    }
}