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
            <form onSubmit={ this.handleSubmit }>
                <input type="text" onChange={ this.handleChange }/>
            </form>
        )
    }
}

export default AddTodo;