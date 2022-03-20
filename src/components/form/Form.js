import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
import styles from "./Form.module.css"

const Form  = (props) => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [error, setError] = useState()

    const buttonHandler = (e) => {
        e.preventDefault()
        if(name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'name and age are required'
            })
            return
        }
        if(+age <= 0) {
            setError({
                title: 'Invalid age',
                message: 'Valid age is required'
            })
            return
        }
        const id = Math.floor(Math.random() * 100)+4;
        setName('')
        setAge('')
        props.callAddUser({id, username: name, age})
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
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
                    <input type="text" id="username" onChange={handleName} value={name}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={handleAge} value={age}/>
                    <Button type="submit" onClick={buttonHandler}>Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default Form
