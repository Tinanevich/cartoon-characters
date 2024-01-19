import {ReactNode} from "react";

import './styles.scss';

interface ModalType {
    children?: ReactNode;
    active: boolean;
    toggle: () => void;
  }

const Modal = (props:ModalType) => {

    return (
        <>
        {props.active && (
            <div className="modal-overlay" onClick={props.toggle}>
                <p onClick={(e) => e.stopPropagation()} className="modal-box">
                    {props.children}
                </p>
            </div>
      )}
        </>
    )
}

export default Modal;