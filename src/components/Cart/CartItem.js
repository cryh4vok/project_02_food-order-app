import styleClasses from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={styleClasses['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={styleClasses.summary}>
                    <span className={styleClasses.price}>{price}</span>
                    <span className={styleClasses.amount}>
                        x {props.amount}
                    </span>
                </div>
            </div>
            <div className={styleClasses.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
