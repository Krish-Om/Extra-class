import React from "react";
import { Link } from "react-router-dom";
import "./page-not-found.css";

const PageNotFound = () => {
    return (
        <div className="not-found-container">
            <div className="compass">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3498db" role="img" aria-labelledby="compassTitle">
                    <title id="compassTitle">Compass</title>
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="m13 5.941-1-1-1 1v2.559l-3.297 5.49A.996.996 0 0 0 8 16h8a.996.996 0 0 0 .297-1.949L13 8.5V5.941zM12 14c-.553 0-1-.447-1-1s.447-1 1 1 1 .447 1 1-.447 1-1 1z"></path>
                </svg>
            </div>
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-message">
                Jaldi yaha se hato !!!
            </p>
            <Link to="/" className="back-button">
                Return to Home
            </Link>
        </div>
    );
};

export default PageNotFound;
