import React from 'react';

class TodoForm extends React.Component{
    render(){
    let todoInput;    
        return(
        <div>    
    <input ref={asd => {todoInput= asd}} />
    <button onClick={() => {this.props.addTodo(todoInput.value)}}>Add</button>
    </div>
        )
    }
}

export default TodoForm;