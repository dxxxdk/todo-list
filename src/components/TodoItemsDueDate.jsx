import React, { Component } from 'react'

export default class TodoItemsDueDate extends Component {
    render() {
        return (
            <div>
                {this.props.dueDate.toDateString()}
            </div>
        )
    }
}