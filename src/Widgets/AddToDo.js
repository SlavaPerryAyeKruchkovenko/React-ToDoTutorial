import React,{useState}from 'react';
import PropTypes from 'prop-types';
const styles = {
    form:{
        margin: '0 auto',
        width: '80%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
    },
    input:{
        margin: '0',
        padding: '5px',
        width: '50%',
    },
    button:{
        fontSize: '14px',
        outline: 0,
        cursor: 'pointer',
        border: 'none',
        borderBottom: '5px solid #2fad13',
        borderRadius: '100px 100px 100px 100px / 200% 200%',
        boxShadow: '0px 10px 15px 0px #78f25c',
        textShadow: '1px 1px 2px gray, 0 0 1em #78f25c',
        textTransform: 'uppercase',
        padding: '10px',
        fontFamily: 'sans-serif',
        background: 'linear-gradient( 0deg, #35eb0c, #73fa55)',
    },

}
function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)
    return{
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}
function AddToDo({Create}) {

    const input = useInputValue()

    function submitHandler(event){
        event.preventDefault()
        if(input.value().trim()) {
            Create(input.value())
            input.clear()
        }
    }
    return(
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input} {...input.bind}/>
            <button type="submit" style={styles.button}>
                Add ToDo
            </button>
        </form>
    )
}
AddToDo.propTypes = {
    Create: PropTypes.func.isRequired
}

export default  AddToDo