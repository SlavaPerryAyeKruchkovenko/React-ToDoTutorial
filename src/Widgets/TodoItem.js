import  React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../Services/context";

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '2px',
        marginBottom: '.5rem',
        background: '#ffDB4f'
    },
    input:{
        marginRight: '1rem',
    },
}

function TodoItem( {todo,index, onPressed} ){
    const {removeTodo} = useContext(Context)
    const classes = []
    if(todo.completed)
    {
        classes.push('done')
    }

    return <li style={styles.li}>
        <span>
            <input type="checkbox" style={styles.input}
                   onChange={() =>onPressed(index)} checked={todo.completed}/>
            <strong>{index}</strong>
            &nbsp;
            <text className={classes.join(' ')}>{todo.title}</text>
        </span>
        <button className='rm' onClick={()=> removeTodo(todo.id)}>&times;</button>

    </li>
}
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onPressed: PropTypes.func.isRequired,
}
export default TodoItem