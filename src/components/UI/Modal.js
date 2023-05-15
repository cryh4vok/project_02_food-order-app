import styleClasses from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return (
        <div
            className={styleClasses.backdrop}
            onClick={props.onClose}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={styleClasses.modal}>
            <div className={styleClasses.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
