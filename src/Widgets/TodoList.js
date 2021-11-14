import React from 'react'
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

const styles = {
    ui:{
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}
function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo,index) => {
                return (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={todo.id}
                        onPressed={props.onToggle}
                    />
                )
            })}
        </ul>
    )
}
TodoList.prototype = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export  default TodoList