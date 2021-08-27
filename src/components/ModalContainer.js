import React, { useState } from 'react';
import "../styles/modal.css"

const Modal = ({ show, close, title, header, description, detail }) => {
    
    return (
        <>
        {
        show ? (
            <div className="modalContainer"
            onClick={() => close()}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <h2 className="modal-title">{title}</h2>
                    
                <main className="modal-content">
                    <h4>{header}</h4>
                    <h6>{description}</h6>
                    <p>{detail}</p>
                </main>
                <button className="function-button"
                        onClick={() => close()}>Close Modal
                        </button>
                </div>
            </div>
        ) : null}
        </>
    )
}



const ModalContainer = () => {

    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal)

    return (
        <div>
            <button className="function-button" onClick={() => Toggle()}>Display Modal</button>
            <Modal show={modal} close={Toggle} title="" description="" detail="" header=""/>
        </div>
    );
};

export default ModalContainer;