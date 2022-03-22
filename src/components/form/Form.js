import { useState, useRef } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
import styles from "./Form.module.css"

const Form  = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    // const [name, setName] = useState()
    // const [age, setAge] = useState()
    const [error, setError] = useState()

    const buttonHandler = (e) => {
        e.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'name and age are required'
            })
            return
        }
        if(+enteredAge <= 0) {
            setError({
                title: 'Invalid age',
                message: 'Valid age is required'
            })
            return
        }
        const id = Math.floor(Math.random() * 100)+4;
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        props.callAddUser({id, username: enteredName, age: enteredAge})
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} closeModal={errorHandler} />}
            <Card myClass={styles.input}>
                <form action={buttonHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={nameInputRef}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" ref={ageInputRef}/>
                    <Button type="submit" onClick={buttonHandler}>Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default Form
