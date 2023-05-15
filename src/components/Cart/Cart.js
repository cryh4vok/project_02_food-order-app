import Modal from '../UI/Modal';
import styleClasses from './Cart.module.css';

const Cart = (props) => {
    const cartItems = (
        <ul className={styleClasses['cart-items']}>
            {[
                {
                    id: 'c1',
                    name: 'Sushi',
                    description: 'Finest fish and veggies',
                    price: 22.99,
                },
            ].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styleClasses.total}>
                <span>Total</span>
                <span>$13.99</span>
            </div>
            <div className={styleClasses.actions}>
                <button
                    className={styleClasses['button--alt']}
                    onClick={props.onClose}>
                    Close
                </button>
                <button className={styleClasses['button']}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
