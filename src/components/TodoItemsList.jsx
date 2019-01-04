import React, { Component } from 'react'
import TodoItemsDueDate from './TodoItemsDueDate'
import TodoItem from './TodoItem'
import TodoItemFilter from './TodoItemFilter'

export default class TodoItemsList extends Component {
    render() {
        const items = []
        let lastDueDate = null

        this.props.todoItems
            .sort((a, b) => new Date(a.dueDate).getTime() < new Date(b.dueDate).getTime() ? -1 : 1)
            .forEach(todoItem => {
                if (todoItem.dueDate !== lastDueDate) {
                    items.push(
                        <TodoItemsDueDate dueDate={todoItem.dueDate} />
                    )
                    lastDueDate = todoItem.dueDate
                }
                items.push(
                    <TodoItem todoItem={todoItem} />
                )
            })

        return (
            <div>
                <div>
                    {items}
                </div>
                <TodoItemFilter />
            </div>
        )
    }
}