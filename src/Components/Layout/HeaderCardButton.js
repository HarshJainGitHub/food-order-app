import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon';
import cartContext from '../store/cart-context';
import classes from './HeaderCardButton.module.css'

function HeaderCardButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(cartContext);
    const numberOfCartItems = cartCtx.items.reduce( (currentValue ,item) => { return currentValue + item.amount},0);


    const {items} = cartCtx;

    useEffect( () =>{
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout( () => {
            setBtnIsHighlighted(false);
        },300)

        return()=> {
            clearTimeout(timer);
        }
    },[items]);

    const btnStyles = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;

    return (
        <button className={btnStyles} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>  Your Cart   </span>
            <span className={classes.badge}> {numberOfCartItems} </span>
        </button>
    )
}

export default HeaderCardButton;
