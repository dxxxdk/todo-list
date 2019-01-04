import React, { Component } from 'react'
import './App.css'
import TodoItemsList from './TodoItemsList'
import NewTodoInput from './NewTodoInput'

// TODO: remove
const sampleTodoItems = [
  { id: 1, text: "do x", dueDate: "2018-12-31T23:00:00.000Z", completed: true },
  { id: 2, text: "finish y", dueDate: "2019-01-01T23:00:00.000Z", completed: false },
  { id: 3, text: "research z", dueDate: "2019-01-02T23:00:00.000Z", completed: false },
]

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NewTodoInput />
        <TodoItemsList todoItems={sampleTodoItems} />
      </div>
    )
  }
}