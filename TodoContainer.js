import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import _ from 'lodash';
// import { IsEmpty, Map } from "react-lodash";

class TodoContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        // localStorage.setItem("todo",JSON.stringify(["Todo 1","Todo 2"]));
    }

    addTodo = (e) => {
        e.preventDefault();
        let ls = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
        ls = _.concat(ls, e.target.todo.value);
        localStorage.setItem("todo",JSON.stringify(ls));
        this.setState({
            todos: ls
        });
    }

    deleteTodo = (indexToDelete) => {
        let ls = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
        let newArr = _.filter(ls, function(value,index) { 
            if (indexToDelete == index)
            return false;
            else
            return true;
        });

        
        localStorage.setItem("todo",JSON.stringify(newArr));
        this.setState({
            todos: newArr
        }, () => {
            console.log(this.state.todos);
        });
    }

    deleteAll = () => {
        localStorage.setItem("todo",[]);
        this.setState({
            todos: []
        });
    }

    componentWillMount() {
        let temp = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
        this.setState({
            todos: [...temp]
        });
    }

    componentDidMount() {
        let temp = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
        this.setState({
            todos: [...temp]
        });
    }

    render () {
        return (
            <>
                <TodoForm addTodo={this.addTodo}/><br />
                <TodoList todos={this.state.todos} deleteAll={this.deleteAll} deleteTodo={this.deleteTodo} />
            </>
        )
    }
}

export default TodoContainer;