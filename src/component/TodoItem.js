import React, { Component } from 'react'

export class TodoItem extends Component {
    
    render() {
        const {id , value, value2, marked} = this.props.todo
        return (
            <div>
                <div className="todoitem">
                    <p className="todocontent">{value}</p>
                    <p className="todocontent">{value2}</p>
                    <input className="todocontent" type="checkbox" onChange={this.props.markedItem.bind(this, id)} checked={marked}/>
                    <button className="todocontent" onClick={this.props.delTodo.bind(this, id)}>x</button>
                </div>
            </div>
        )
    }
}

export default TodoItem
