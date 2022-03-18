import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import styles from "./Form.module.css"

const Form  = (props) => {
    const [name, setName] = useState()
    const [age, setAge] = useState()

    const buttonHandler = (e) => {
        e.preventDefault()
        if(name.trim().length === 0 || age.trim().length === 0) {
            return
        }
        if(+age < 0) {
            return
        }
        setName('')
        setAge('')
        props.callAddUser({username: name, age})
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    return (
        <Card myClass={styles.input}>
            <form action={buttonHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={handleName} value={name}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={handleAge} value={age}/>
                <Button type="submit" onClick={buttonHandler}>Submit</Button>
            </form>
        </Card>
    )
}

export default Form
