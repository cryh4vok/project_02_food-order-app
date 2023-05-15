import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import styleClasses from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.totalAmount;
    }, 0);

    return (
        <button
            type="button"
            className={styleClasses['button']}
            onClick={props.onClick}>
            <span className={styleClasses['icon']}>
                <CartIcon />
            </span>
            <span>Your Cart </span>
            <span className={styleClasses['badge']}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
