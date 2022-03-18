import Card from "../UI/Card"
import styles from './Users.module.css'

const Users = (props) => {
    const getUsers = () => {
        return <ul className={styles.ul}>
            {props.allusers.map((user) => {
                return <li className={styles.li}>
                    {user.username} ({user.age} years old)
                </li>
            })}
        </ul>
    }
    return <Card myClass={styles.users}>
        {getUsers()}
    </Card>    
}

export default Users
