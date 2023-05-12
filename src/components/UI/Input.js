import styleClasses from './Input.module.css';

const Input = (props) => {
    return (
        <div className={styleClasses.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
            {/* Tukaj je znotraj ...props tudi id = {props.input.id}!! */}
        </div>
    );
};

export default Input;
