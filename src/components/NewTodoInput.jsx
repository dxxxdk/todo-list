import React, { Component } from 'react'

export default class NewTodoInput extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Add new task"
          autoFocus={true}
        />
        <input
          placeholder="Add due date"
        />
      </div>
    )
  }
}