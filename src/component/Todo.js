import React, { Component } from 'react'
import AddTodo from "./AddTodo"
import TodoItem from './TodoItem'






let storelist = [ 
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
        ]

        // setlocalstorage
function setlocalstorage() {
        localStorage.setItem("todolist", JSON.stringify(storelist));
}
// get items from local storage

    let newlist = JSON.parse(localStorage.getItem("todolist"));


export class Todo extends Component {
    state = {
        todos: newlist,
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
            // this.setState({ todos : [...this.state.todos, newTodo] });
            storelist.push(newTodo);
            setlocalstorage();
            this.setState({ todos: JSON.parse(localStorage.getItem("todolist"))});
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
        // this.setState({filteritem : text });
        // newlist.filter(item => item.value.toLowerCase().indexOf(this.state.filteritem) !== -1 );
        // console.log(newlist.filter(item => item.value.toLowerCase().includes(text) || !text))
        this.setState({ todos: newlist.filter(item => item.value.toLowerCase().includes(text) || !text)})
        }
    


    render() {
        const { todos } = this.state;
        return (
            <div>
                <div className="topbtns">
                    <button className="deletemarked" onClick={this.markall}>Select All</button>
                    <button className="deletemarked" onClick={this.unmarkall}>Unselect All</button>
                    <button className="deletemarked" onClick={this.deletemarked}>Delete Marked</button>
                    <input type="text" placeholder="Filter by first name" onChange={this.setstatefilteritem} />
                </div>
                <AddTodo addtodo={this.addtodo} />

                {todos.map( (todo) => 
                    <TodoItem key={todo.id} editItem={this.editItem} markedItem={this.markedItem} todo={todo} delTodo={this.delTodo} />
                )}
            </div>
        )
    }
}

export default Todo
