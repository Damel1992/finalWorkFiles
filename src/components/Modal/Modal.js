import React, {useState} from 'react';
import './Modal.css';
import FormComics from "../FormComics/FormComics";

// В случае применения:
// import Modal from "../Modal/Modal"; (проверить путь)
// const [isModal, setIsModal] = useState(false);
// <Modal isModal={isModal} title="Добавление комикса" closeModal={()=>setIsModal(false)}></Modal>

function Modal(props) {
    return (
        <div className={`modal_wrapper ${props.isModal ? "open" : "close"}`}>
            <div className="modal_body">
                <h2>{props.title}</h2>
                {props.children}
                <button onClick={props.closeModal} className="deleteItem">&times;</button>
            </div>
        </div>
    );
}

export default Modal;