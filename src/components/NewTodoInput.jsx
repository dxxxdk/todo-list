import React, { Component } from 'react'

const ENTER_KEY_CODE = 13

export default class NewTodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      dueDateString: (new Date()).toJSON().slice(0, 10)
    }
    this.todoTitleTextInput = React.createRef()

    this.handleTodoTitleTextChange = this.handleTodoTitleTextChange.bind(this)
    this.handleTodoTitleKeyDown = this.handleTodoTextKeyDown.bind(this)
    this.handleTodoDueDateTextChange = this.handleTodoDueDateTextChange.bind(this)
    this.handleTodoDueDateKeyDown = this.handleTodoDueDateKeyDown.bind(this)
  }

  addTodo() {
    const title = this.state.title
    if (!title.trim()) {
      return
    }

    const getUtcMidnightDate = date =>
      new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    let dueDateString = getUtcMidnightDate(new Date(this.state.dueDateString)).toJSON()
    
    this.props.addTodo(title, dueDateString)

    this.setState({
      title: ''
    })

    this.todoTitleTextInput.current.focus()
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
      dueDateString: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.todoTitleTextInput}
          value={this.state.title}
          onKeyDown={this.handleTodoTitleKeyDown}
          onChange={this.handleTodoTitleTextChange}
          placeholder="Add new task"
          autoFocus={true}
        />
        <input
          type="date"
          value={this.state.dueDateString}
          onKeyDown={this.handleTodoDueDateKeyDown}
          onChange={this.handleTodoDueDateTextChange}
          placeholder="Add due date"
        />
      </div>
    )
  }
}