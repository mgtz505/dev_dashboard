import React, { useState } from 'react';
import "../styles/modal.css"

const Modal = ({ title, header, description, detail }) => {
    
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal)

console.log(modal)

    return (
        <>
        <button className="function-button" onClick={() => Toggle()}>Display Modal</button>

        {
        modal ? (
            <div className="modalContainer"
            onClick={() => Toggle()}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <h2 className="modal-title">{title}</h2>
                    
                <main className="modal-content">
                    <h4>{header}</h4>
                    <h6>{description}</h6>
                    <p>{detail}</p>
                </main>
                <button className="function-button"
                        onClick={() => Toggle()}>Close Modal
                        </button>
                </div>
            </div>
        ) : null}
        </>
    )
}



// const ModalContainer = () => {

//     const [modal, setModal] = useState(false);
//     const Toggle = () => setModal(!modal)

//     return (
//         <div>
//             <button className="function-button" onClick={() => Toggle()}>Display Modal</button>
//             <Modal show={modal} close={Toggle} title="" description="" detail="" header=""/>
//         </div>
//     );
// };

export default Modal;