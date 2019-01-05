import React, { Component } from 'react'
import './App.css'
import TodoItemsList from './TodoItemsList'
import NewTodoInput from './NewTodoInput'

// TODO: remove
const sampleTodoItems = [
  { id: 1, title: "do x", dueDate: "2018-12-31T23:00:00.000Z", completed: true },
  { id: 2, title: "finish y", dueDate: "2019-01-01T23:00:00.000Z", completed: false },
  { id: 3, title: "research z", dueDate: "2019-01-02T23:00:00.000Z", completed: false },
]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: sampleTodoItems
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(title, dueDate) {
    const todoItems = this.state.todoItems

    // TODO: handle overflow
    const id = 1 + todoItems.reduce(
      (maximumId, currentTodo) => maximumId > currentTodo.id ? maximumId : currentTodo.id,
      0)

    todoItems.push({ id: id, title: title, dueDate: dueDate, completed: false })

    this.setState({
      todoItems: todoItems
    })
  }

  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <NewTodoInput addTodo={this.addTodo} />
          <TodoItemsList todoItems={this.state.todoItems} />
        </React.StrictMode>
      </div>
    )
  }
}