import styleClasses from './Card.module.css';

const Card = (props) => {
    return <div className={styleClasses.card}>{props.children}</div>;
};
export default Card;
