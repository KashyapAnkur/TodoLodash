import React from 'react';

class Todo extends React.Component{

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
                {this.props.todos}&nbsp;
                <button onClick={() => this.props.deleteTodo(this.props.index)}>Delete</button>
                <br />
                <br />
            </>
        )
    }
}

export default Todo;