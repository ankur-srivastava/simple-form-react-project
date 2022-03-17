const Users = (props) => {
    const getUsers = () => {
        return props.allusers.map((user) => {
            return <div>
                {user.username} ({user.age} years old)
            </div>    
        })
    }
    return <div style={{margin: '1px'}}>
        {getUsers()}
    </div>
}

export default Users
