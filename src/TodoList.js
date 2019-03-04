import React from 'react';

const TodoList = ({todos,toggle}) =>{
    const todoList = todos().map((todo) => 
                               {
                                return (
                                   <li key={todo.id} onClick={()=>toggle(todo.id)}  style={{
                                        textDecoration: todo.isCompleted ? 'line-through' : 'none'
                                    }}>{todo.text}</li>
                              )
                               });
    return(<div><ul>{todoList}</ul></div>);
};

export default TodoList;