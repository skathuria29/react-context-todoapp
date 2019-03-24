import React from 'react';
import { TodoContext } from './TodoListApp';
import moment from 'moment';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck, faTrash)

class TodoListItems extends React.Component {
    render() {
        return (
            <TodoContext.Consumer>
                {
                    ({ todos, deleteItem, markComplete }) => {
                        console.log(todos);
                        return (
                            todos.map((list, index) => {
                                return (
                                    <div className="todoitem-container" key={list.item + new Date().valueOf()}>
                                        <div className="todoitem-left">
                                            <div className={list.isComplete ? "todoitem__text complete" : "todoitem__text"} autoComplete="off"> {list.item}</div>
                                            <div className="todoitem__createdAt">{moment(new Date(list.createdAt)).format('ddd, MMM DD')} </div>
                                        </div>
                                        <div className="todoitem-right">
                                            
                                            {!list.isComplete &&
                                                <FontAwesomeIcon
                                                    icon="check"
                                                    title="Mark as Complete"
                                                    className="action-icon"
                                                    onClick={markComplete.bind(this, index)}
                                                />
                                            }
                                            <FontAwesomeIcon
                                                icon="trash"
                                                title="Delete Todo"
                                                className="action-icon"
                                                onClick={deleteItem.bind(this, index)}
                                            />
                                           
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                }
            </TodoContext.Consumer>
        )
    }

}

export default TodoListItems;