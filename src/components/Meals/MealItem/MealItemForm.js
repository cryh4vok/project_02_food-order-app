import styleClasses from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return (
        <div>
            <form className={styleClasses.form}>
                <label></label>
                <span>
                    <input
                        type="number"
                        min="1"
                        max="10"
                    />
                </span>
                <button type="submit">Order</button>
            </form>
        </div>
    );
};

export default MealItemForm;
