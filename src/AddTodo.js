import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: null
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        document.querySelector('input').value = " ";
    }

   
    render() {
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>Add new todo:</label>
                    <input type="text" onChange={ this.handleChange }/>
                </form>
            </div>
        )
    }
}

export default AddTodo;