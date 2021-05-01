import React from 'react';
import Todo from './Todo';
import { IsEmpty, Map } from "react-lodash";

class TodoList extends React.Component{ 

    constructor(props){
        super(props);
    }

    render () {
        return (
            <>
                <IsEmpty
                    value={this.props.todos}
                    yes={() => ("Empty list")}
                    no={() => (
                        <ul>
                            <Map collection={this.props.todos} iteratee={(todos,index) => <Todo deleteTodo={this.props.deleteTodo} todos={todos} index={index}/>} />
                        </ul>
                    )}
                />
                {this.props.todos.length > 0 && 
                <button onClick={this.props.deleteAll}>Delete all</button>}
            </>
        )
    }
}

export default TodoList;