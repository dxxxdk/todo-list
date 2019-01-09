import React, { Component } from 'react'
import classNames from 'classnames'
import whiteTick from '../images/whiteTick.svg'

export default class TodoItem extends Component {
    render() {
        const todoItem = this.props.todoItem
        return (
            <div className={classNames('todo-item')}>
                <div
                    className={classNames('todo-checkbox', { 'todo-checkbox-complete': todoItem.isComplete })}
                    onClick={this.props.toggleTodoComplete.bind(this, todoItem.id)} >
                    <img src={whiteTick} alt="" />
                </div>
                <div className={classNames('todo-title', { 'todo-title-complete': todoItem.isComplete })}>
                    {todoItem.title}
                </div>

                <div className={classNames('todo-button', 'todo-edit-button')}>
                    Edit
                </div>
                <div className={classNames('todo-button', 'todo-delete-button')}>
                    Delete
                </div>
            </div>
        )
    }
}