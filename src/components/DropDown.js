import React, { useState, useEffect, useRef } from 'react';
import "../styles/dropdown.css"

const DropDown = ({ selectType }) => {

    //State
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (
                dropDownRef.current !== null &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsActive(!isActive);
            }
        };
        if (isActive) {
            window.addEventListener("click", pageClickEvent);
        }
        return () => {
            window.removeEventListener("click", pageClickEvent)
        }
    }, [isActive])

    return (
        <div className="DropDown-MenuContainer">
            <button onClick={onClick} className="triggerButton">
            <span>Select a Category</span>
            </button>
            <nav
            ref={dropDownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
            >
                <ul>
                    <li className="grow" onClick={selectType}>
                        <a href="#">US</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">World</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Upshot</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Arts</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Books</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Business</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Food</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Health</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Home</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Movies</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Opinion</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Science</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Sports</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Technology</a>
                    </li>
                    <li className="grow" onClick={selectType}>
                        <a href="#">Travel</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DropDown;