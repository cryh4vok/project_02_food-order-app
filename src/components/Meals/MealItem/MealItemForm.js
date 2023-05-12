import Input from '../../UI/Input';
import styleClasses from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return (
        <div>
            <form className={styleClasses.form}>
                <Input
                    label="Amount"
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                    }}
                />

                <button type="submit">+ Add</button>
            </form>
        </div>
    );
};

export default MealItemForm;
