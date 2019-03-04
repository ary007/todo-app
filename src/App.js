import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Footer from './Footer';
import React, { Component } from 'react';


class App extends Component{
    
    constructor(props){
        super(props);
     this.id=0;    
     this.state = {data:[], listType: 'ALL'   
      }
     this.addTodo = this.addTodo.bind(this); 
     this.listType= this.listType.bind(this);    
    }
      addTodo(val){
        if(val){  
        const todo = {text: val, id: this.id++, isCompleted: false} 
        this.state.data.push(todo);
        this.setState({data: this.state.data}); 
        }
    }
      toggle = (id) =>{
        const value= this.state.data.map((todo) =>{if(todo.id===id){todo.isCompleted= !todo.isCompleted;} return todo} );
        this.setState({data:value}); 
        console.log(this.state.data);  
      }
      
      listType =(val) =>{
       this.setState({listType: val});   
      }
      
      todoList=()=>{
        switch(this.state.listType){
            case 'ALL': return this.state.data; 
            case 'ACTIVE': return this.state.data.filter((todo) => {if(todo.isCompleted===false) return todo}); 
            case 'COMPLETED': return this.state.data.filter((todo) => {if(todo.isCompleted===true) return todo});     
        }  
      }
     
    render(){
    return  (
      <React.Fragment>
      <TodoForm addTodo={this.addTodo}/>
      <TodoList todos={this.todoList} toggle={this.toggle} />   
      <Footer listType={this.listType} active={this.state.listType}/>    
  </React.Fragment>  
  )    
}
}


export default App;
