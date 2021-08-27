import React, { useState } from 'react';
import "../styles/modal.css"

const Modal = ({ title, header, description, details }) => {
    
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal)


    return (
        <>
        <button className="modal-button" onClick={() => Toggle()}>ℹ️</button>

        {
        modal ? (
            <div className="modalContainer"
            onClick={() => Toggle()}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <h2 className="modal-title">{title}</h2>
                    
                <main className="modal-content">
                    <h3>{header}</h3>
                    <h4>{description}</h4>
                    <div className="detail-container">
                   {details.map((detail) => {
                       return (
                           <h5>✔️ {detail}</h5>
                       )
                   })}
                    </div>
                </main>
                <button className="modal-button-exit"
                        onClick={() => Toggle()}>🚫
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