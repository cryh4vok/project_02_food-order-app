import CartIcon from '../Cart/CartIcon';
import styleClasses from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (
        <button
            type="button"
            className={styleClasses['button']}>
            <span className={styleClasses['icon']}>
                <CartIcon />
            </span>
            <span>Your Cart </span>
            <span className={styleClasses['badge']}>3hc</span>
        </button>
    );
};

export default HeaderCartButton;
