import React from 'react'
import mealsImage from '../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton';

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h2>ReactMeals</h2>
                <HeaderCardButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="ReactMeals Icon" />
            </div>
        </React.Fragment>
    )
}

export default Header;