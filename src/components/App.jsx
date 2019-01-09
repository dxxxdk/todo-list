import React, { Component } from 'react'
import './App.css'
import TodoItemsList from './TodoItemsList'
import NewTodoInput from './NewTodoInput'

// TODO: remove
const sampleTodoItems = [
  { id: 1, title: "do x", jsonDueDate: "2018-12-31T00:00:00.000Z", isComplete: true },
  { id: 2, title: "finish y", jsonDueDate: "2019-01-01T00:00:00.000Z", isComplete: false },
  { id: 3, title: "research z", jsonDueDate: "2019-01-02T00:00:00.000Z", isComplete: false },
]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: sampleTodoItems
    }

    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.toggleTodoComplete = this.toggleTodoComplete.bind(this)
  }

  addTodo(title, jsonDueDate) {
    const todoItems = this.state.todoItems

    // TODO: handle overflow
    const id = 1 + todoItems.reduce(
      (maximumId, currentTodo) => maximumId > currentTodo.id ? maximumId : currentTodo.id,
      0)

    todoItems.push({ id: id, title: title, jsonDueDate: jsonDueDate, completed: false })

    this.setState({
      todoItems: todoItems
    })
  }

  deleteTodo(id) {
    this.setState({
      todoItems: this.state.todoItems.filter(todoItem => {
        if (todoItem.id !== id) {
          return true
        }
        return false
      })
    })
  }

  toggleTodoComplete(id) {
    this.setState({
      todoItems: this.state.todoItems.map(todoItem => {
        if (todoItem.id === id) {
          todoItem.isComplete = !todoItem.isComplete
        }
        return todoItem
      })
    })
  }

  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <NewTodoInput addTodo={this.addTodo} />
          <TodoItemsList
            todoItems={this.state.todoItems}
            toggleTodoComplete={this.toggleTodoComplete}
            deleteTodo={this.deleteTodo} />
        </React.StrictMode>
      </div>
    )
  }
}