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
               
                    {props.children}
                
            </div>
      )}
        </>
    )
}

export default Modal;