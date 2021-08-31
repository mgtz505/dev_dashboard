import React, { useState, useEffect, useRef } from 'react';
import "../styles/dropdown.css"

const DropDown = ({ selectType }) => {

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
        };
        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [isActive])

    const categories = ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Home", "Insider", "Magazine", "Movies", "Nyregion", "Obituaries", "Opinion","Politics", "Realestate", "Science", "Sports", "Sundayreview", "Technology", "Theater", "T-magazine", "Travel", "Upshot", "US", "World"];
    return (
        <div className="DropDown-MenuContainer">
            <button onClick={onClick} className="function-button-showNews">
            <span>📰</span>
            </button>
            <nav
            ref={dropDownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
            >
                <ul>
                    {categories.map((category) => {
                        return (
                    <li className="grow" onClick={selectType}>
                        <a href="#">{category}</a>
                    </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default DropDown;