import React from 'react'
import classes from './Card.module.css'

function Card(props) {
    return (
        <React.Fragment>
            <div className={classes.card}> {props.children }</div>
        </React.Fragment>
    )
}

export default Card
