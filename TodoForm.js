import React from 'react';

class TodoForm extends React.Component{

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
                <form onSubmit={this.props.addTodo}>
                    <input type="text" placeholder="Enter todo" name="todo" /><br /><br />
                    <button>Add todo</button>
                </form>
            </>
        )
    }
}

export default TodoForm;