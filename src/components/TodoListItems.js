import React from 'react';
import { TodoContext } from './TodoListApp';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck, faTrash)

class TodoListItems extends React.Component {
    render(){
        return(
            <TodoContext.Consumer>
                {
                    ({todos, deleteItem, markComplete}) => {
                        console.log(todos);
                        return (
                           todos.map( (list, index) => {
                                return (
                                    <div className="todoitem-container" key={ list.item + new Date().valueOf()}> 
                                        <div className={"todoitem__text" + this.isComplete ? " complete": ""}> {list.item}</div>
                                        <div className="todoitem_actions">
                                            {!list.isComplete &&
                                                <FontAwesomeIcon
                                                    icon="check"
                                                    title="Mark as Complete"
                                                    className="control-icon"
                                                    onClick={markComplete.bind(this, index)}
                                                />
                                            }
                                            <FontAwesomeIcon
                                                icon="trash"
                                                title="Delete Todo"
                                                className="control-icon"
                                                onClick = {deleteItem.bind(this, index)}
                                            />
                                        </div>
                                    </div>
                                )
                           })
                    )}
                }
            </TodoContext.Consumer>
        )
    }
    
}

  // <FontAwesomeIcon icon="faCheck" />  // <FontAwesomeIcon icon="faCheck" />

export default TodoListItems;