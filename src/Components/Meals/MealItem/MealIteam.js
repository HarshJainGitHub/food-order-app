import React from 'react'
import classes from '../MealItem/MealItem.module.css';

function MealIteam(props) {

    const price = `$ ${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3> { props.name } </h3>
                <div className={classes.description}>{ props.description }</div>
                <div className={classes.price}> { props.price } </div>
            </div>
            <div></div>
        </li>
    )
}

export default MealIteam;
