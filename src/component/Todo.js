import React, { Component } from 'react'
import AddTodo from "./AddTodo"
import TodoItem from './TodoItem'

export class Todo extends Component {
    state = {
        todos: [
            {
                id: 1,
                value: "Todo app made.",
                value2 : "2nd column",
                marked : false
            },
            {
                id: 2,
                value: "Basic todo app",
                value2 : "2nd column",
                marked : false
            },
            {
                id: 3,
                value: "Add one todo from one input",
                value2 : "2nd column",
                marked : false
            },
            {
                id: 4,
                value: "Gave it a second column",
                value2 : "2nd column",
                marked : false

            },
        ]
    }


    // delete todo if click on red cross button
    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter( (item) => item.id !== id)] })
    }


    // add new todos from the form in the list
    addtodo = (item) => {
        if(item.value === "" || item.value2 === "") {
            alert('please fill out the forms')
        } else {
            const newTodo = {
                id : item.value,
                value : item.value,
                value2 : item.value2,
                marked : false
            }
            this.setState({ todos : [...this.state.todos, newTodo] });
        }
    }


    // delete all marked item onclick  the Delete button
    deletemarked = () => {
        this.setState({ todos: [...this.state.todos.filter( item => item.marked === false)]})
    }


    // mark and unmark items
    markedItem = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.marked = !todo.marked
            }
            return todo;
        })});
    }


    // mark all todo items
    markall = () => {
        this.setState({todos: this.state.todos.map((todo) => {
            if(todo.marked === false) {
                todo.marked = !todo.marked;
            }return todo;
        })})
    }

    

    render() {
        return (
            <div>
                <div className="topbtns">
                    <button className="deletemarked" onClick={this.markall}>Select All</button>
                    <button className="deletemarked" onClick={this.deletemarked}>Delete Marked</button>
                </div>
                <AddTodo addtodo={this.addtodo} />
                {this.state.todos.map( (todo) => (
                    <TodoItem markedItem={this.markedItem} key={todo.id} todo={todo} delTodo={this.delTodo} />
                ))}
            </div>
        )
    }
}

export default Todo
