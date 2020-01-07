import React, { Component } from 'react'

export default class SearchTodo extends Component {
    render() {
        return (
            <h2>Search
                <input
                    name="searchtext"
                    onChange={(e) => this.props.setSearching(e)}
                    placeholder="Search Todo"
                />
            </h2>
        )
    }
}
