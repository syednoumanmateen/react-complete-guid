import React, { useState, useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = ({ onAddUser }) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [userName, setUserName] = useState('')
    // const [age, setAge] = useState('')
    const [error, setError] = useState()


    const addUserHandler = (e) => {
        e.preventDefault()
        const userName = nameInputRef.current.value
        const age = ageInputRef.current.value

        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            })
            return;
        }

        if (+age < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age greater than 0'
            })
            return;
        }
        onAddUser(userName, age)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        // setUserName('')
        // setAge('')
    }

    // const userNameChangeHandler = e => {
        // setUserName(e.target.value)
    // }

    // const ageChangeHandler = e => {
        // setAge(e.target.value)
    // }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card classCss={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="" id="username" ref={nameInputRef} />
                    {/* <input type="text" name="" id="username" value={userName} onChange={userNameChangeHandler} /> */}
                    <label htmlFor='age'>Age(Years)</label>
                    <input type="number" name="" id="age" ref={ageInputRef} />
                    {/* <input type="number" name="" id="age" value={age} onChange={ageChangeHandler} /> */}
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
