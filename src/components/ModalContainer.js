import React, { useState } from 'react';
import "../styles/modal.css"

const Modal = ({ show, close }) => {
    
    return (
        <>
        {
            show ? (
                <div className="modalContainer"
                onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <header className='modal-header'>
                            <h2 classNAme="modal-title">Modal Title</h2>
                            <button className="function-button"
                            onClick={() => close()}>
                           
                            </button>
                        </header>
                    <main classNAme="modal-content">
                        Modal Content
                    </main>
                    <footer className="modal-footer">
                    
                    </footer>
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
            <Modal show={modal} close={Toggle}/>
        </div>
    );
};

export default ModalContainer;