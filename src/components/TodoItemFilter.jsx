import React, { Component } from 'react'

export default class TodoItemFilter extends Component {
    render() {
        return (
            <div>
                <div>Filter:</div>
                <div>All</div>
                <div>Active</div>
                <div>Completed</div>
            </div>
        )
    }
}