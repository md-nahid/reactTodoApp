import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
                value: "",
                value2: ""
            }


    valuechanged = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    // onsubmit this function calls another function in the todos page
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({ value : "", value2 : ""});
    }



    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input onChange={this.valuechanged} type="text" name="value" placeholder="First name..." value={this.state.value} />
                    <input onChange={this.valuechanged} type="text" name="value2" placeholder="Last name..." value={this.state.value2} />
                    <input type="submit" value="Add Name" />
                </form>
            </div>
        )
    }
}
