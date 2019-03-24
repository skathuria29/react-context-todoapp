import React from 'react';
// import TodoListItems from './TodoListItems';

const TodoContext = React.createContext();

class TodoList extends React.Component {
    state = {
        todos: [
            {
                item: 'create an application using react-context api',
                isComplete: false,
                createdAt: 1553193000000
            },
            {
                
                item: 'Learn react',
                isComplete: false,
                createdAt: 1553020200000
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
            todos: prevState.todos.filter((item, index) => index !== indexToDelete)
        }))
    }

    addTodo = (e) => {
        e.preventDefault();
        let value = e.target.elements['todo-text'].value;
        if (value) {
            value = e.target.elements['todo-text'].value.trim();
            const todo = {
                item: value,
                isComplete: false,
                createdAt: new Date().valueOf()
            }

            this.setState((prevState) => ({
                todos: [todo, ...prevState.todos]
            }))
            e.target.elements['todo-text'].value = '';
        }

    }

    render() {
        return (
            <TodoContext.Provider value={{
                todos: this.state.todos,
                deleteItem: this.deleteTodo,
                markComplete: this.markComplete
            }}>
                <div className="app-container">
                    <div className="todo-container">
                        <header className="todo__header">
                            TODO
                        </header>

                        <div className="todo__section">
                            <div className="section-wrapper">
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