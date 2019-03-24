import React from 'react';
// import TodoListItems from './TodoListItems';

const TodoContext = React.createContext();

class TodoList extends React.Component {
    state = {
        todos: [
            {
                item: 'Learn react',
                isComplete: false
            },
            {
                item: 'create an application using react-context api',
                isComplete: false
            }
        ]
    }

    markComplete = (index) => {
        this.setState((prevState) => {
            console.log(prevState);
            prevState.todos[index].isComplete = true;
            return prevState;
        })
    }
    

    deleteTodo = (indexToDelete) => {
        this.setState((prevState) => ({
            todos : prevState.todos.filter((item, index) => index !== indexToDelete)
        }))
    }

    addTodo = (e) => {
        e.preventDefault();
        let value = e.target.elements['todo-text'].value;
        if(value){
            value = e.target.elements['todo-text'].value.trim();
            const todo = {
                item: value,
                isComplete: false
            }
    
            this.setState((prevState) => ({
                todos: [...prevState.todos, todo]
            }))
            e.target.elements['todo-text'].value = '';
        }
        
    }

    render() {
        return (
            <TodoContext.Provider value={{
                todos : this.state.todos,
                deleteItem : this.deleteTodo,
                markComplete : this.markComplete
            }}>
                <div className="todo-container">
                    <header>
                        TodoApplication
                    </header>

                    <div className="todo-section">
                        <div className="todo__form">
                            <form method="#" onSubmit={this.addTodo}>
                                <input
                                    name="todo-text"
                                    type="text"
                                    placeholder="Add items to todo"
                                />

                                <input type="submit" value="Add" title="Add Todo" />
                            </form>
                        </div>

                        <div className="todo__list">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </TodoContext.Provider>
        )
    }
}

export {
    TodoList, 
    TodoContext
};