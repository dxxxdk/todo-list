import React, { Component } from 'react'
import classNames from 'classnames'

export default class TodoItem extends Component {
    render() {
        const todoItem = this.props.todoItem
        return (
            <div className={classNames('todo-item', { 'todo-item-complete': todoItem.isComplete })}>
                {todoItem.title}
            </div>
        )
    }
}