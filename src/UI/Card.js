import React from 'react'
import classes from './card.module.css'

const Card = ({ children,classCss}) => {
    return (
        <div className={`${classes.card} ${classCss}`}>
            {children}
        </div>
    )
}

export default Card
