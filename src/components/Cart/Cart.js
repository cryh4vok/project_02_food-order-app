import { useContext } from 'react';

import Modal from '../UI/Modal';
import styleClasses from './Cart.module.css';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        console.log(item);
    };
    const cartItemRemoveHandler = (id) => {
        console.log(id);
    };

    const cartItems = (
        <ul className={styleClasses['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styleClasses.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styleClasses.actions}>
                <button
                    className={styleClasses['button--alt']}
                    onClick={props.onClose}>
                    Close
                </button>
                {hasItems && (
                    <button className={styleClasses['button']}>Order</button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
