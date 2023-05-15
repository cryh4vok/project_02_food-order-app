import mealsImage from '../../assets/meals.jpg';
import styleClasses from './Header.module.css';

import './HeaderCartButton';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={styleClasses['header']}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}>
                    Cart
                </HeaderCartButton>
            </header>
            <div className={styleClasses['main-image']}>
                <img
                    alt="food jpg"
                    src={mealsImage}
                />
            </div>
        </>
    );
};

export default Header;
