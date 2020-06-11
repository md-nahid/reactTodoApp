import React, { Component } from 'react'
import AddTodo from "./AddTodo"
import TodoItem from './TodoItem'

export class Todo extends Component {
    state = {
        todos: [
            {
                id: 1,
                value: "Noman",
                value2 : "Chowdhury",
                marked : false
            },
            {
                id: 2,
                value: "Munna",
                value2 : "Chowdhury",
                marked : false
            },
            {
                id: 3,
                value: "Nahid",
                value2 : "Chowdhury",
                marked : false
            },
            {
                id: 4,
                value: "Abu Bokkor",
                value2 : "Siddque",
                marked : false

            },
        ],
        filteritem : ""
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


    // mark and unmark items by clicking check box
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

    // unmark all todo items
    unmarkall = () => {
        this.setState({todos: this.state.todos.map((todo) => {
            if(todo.marked === true) {
                todo.marked = !todo.marked;
            }return todo;
        })})
    }


    // set the state filteritem 
    setstatefilteritem = (e) => {
        let text = e.target.value.toLowerCase();
        this.setState({ filteritem : text });
    }
    
    // filtering from state
    searchingfrom(item){
        return function(todo){
            return todo.value.toLowerCase().includes(item) || !item;
        }
    }
   
    
    // edit todo items 
    editItem = (value) => {
      console.log(value);   
    }


    render() {
        const {filteritem, todos} = this.state;
        return (
            <div>
                <div className="topbtns">
                    <button className="deletemarked" onClick={this.markall}>Select All</button>
                    <button className="deletemarked" onClick={this.unmarkall}>Unselect All</button>
                    <button className="deletemarked" onClick={this.deletemarked}>Delete Marked</button>
                    <input type="text" placeholder="Filter by first name" onChange={this.setstatefilteritem} value={filteritem} />
                </div>
                <AddTodo addtodo={this.addtodo} />
                {todos.filter(this.searchingfrom(filteritem)).map( (todo) => 
                    <TodoItem key={todo.id} editItem={this.editItem} markedItem={this.markedItem} todo={todo} delTodo={this.delTodo} />
                )}
            </div>
        )
    }
}

export default Todo
