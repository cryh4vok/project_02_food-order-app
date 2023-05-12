import styleClasses from './MealItem.module.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={styleClasses.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styleClasses.description}>
                    {props.description}
                </div>
                <div className={styleClasses.price}>{price}</div>
            </div>
            <div></div>
        </li>
    );
};

export default MealItem;