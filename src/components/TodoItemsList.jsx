import React, { Component } from 'react'
import TodoItemsDueDate from './TodoItemsDueDate'
import TodoItem from './TodoItem'
import TodoItemFilter from './TodoItemFilter'

export default class TodoItemsList extends Component {
    render() {
        const items = []
        let lastJsonDueDate = null

        this.props.todoItems
            .sort((a, b) => new Date(a.jsonDueDate).getTime() < new Date(b.jsonDueDate).getTime() ? -1 : 1)
            .forEach(todoItem => {
                if (todoItem.jsonDueDate !== lastJsonDueDate) {
                    const dueDate = new Date(todoItem.jsonDueDate)
                    items.push(
                        <TodoItemsDueDate
                            key={dueDate.getFullYear() * 32 * 12 + dueDate.getDate() * 12 + dueDate.getMonth()}
                            dueDate={dueDate} />
                    )
                    lastJsonDueDate = todoItem.jsonDueDate
                }
                items.push(
                    <TodoItem key={todoItem.id} todoItem={todoItem} />
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