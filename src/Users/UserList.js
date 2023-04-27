import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'

const UserList = ({ users }) => {
    return (
        <Card classCss={classes.user}>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>{user.name} ({user.age}) years Old</li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default UserList
