import React, { Component } from 'react'

const ENTER_KEY_CODE = 13

export default class NewTodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      dueDate: ''
    }

    this.handleTodoTitleTextChange = this.handleTodoTitleTextChange.bind(this)
    this.handleTodoTitleKeyDown = this.handleTodoTextKeyDown.bind(this)
    this.handleTodoDueDateTextChange = this.handleTodoDueDateTextChange.bind(this)
    this.handleTodoDueDateKeyDown = this.handleTodoDueDateKeyDown.bind(this)
  }

  addTodo() {
    const title = this.state.title
    let dueDate = this.state.dueDate
    if (!title.trim()) {
      return
    }
    if (isNaN(Date.parse(dueDate))) {
      dueDate = Date()
    }
    this.props.addTodo(title, dueDate)

    this.setState({
      title: '',
      dueDate: ''
    })
  }

  handleTodoTextKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.addTodo()
    }
  }

  handleTodoTitleTextChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleTodoDueDateKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.addTodo()
    }
  }

  handleTodoDueDateTextChange(e) {
    this.setState({
      dueDate: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.title}
          onKeyDown={this.handleTodoTitleKeyDown}
          onChange={this.handleTodoTitleTextChange}
          placeholder="Add new task"
          autoFocus={true}
        />
        <input
          value={this.state.dueDate}
          onKeyDown={this.handleTodoDueDateKeyDown}
          onChange={this.handleTodoDueDateTextChange}
          placeholder="Add due date"
        />
      </div>
    )
  }
}