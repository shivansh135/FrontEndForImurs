import PropTypes from "prop-types";
import React, { useReducer } from "react"; // Import React and useReducer from "react"
import "./socials.css";

export const Socials = ({ property1, className, text }) => { // Correct the destructuring of props
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`socials ${state.property1} ${className}`}
        >
            <div className="text-wrapper">{text}</div> {/* Use text prop instead of props.text */}
            {state.property1 === "variant-2" && <img className="arrow-outward" alt="Arrow outward" src="arrow-outward.png" />}
        </div>
    );
};

function reducer(state, action) {
    if (state.property1 === "variant-2") {
        switch (action) {
            case "mouse_leave":
                return {
                    property1: "variant-4",
                };
        }
    }

    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "variant-2",
            };
    }

    return state;
}

Socials.propTypes = {
    property1: PropTypes.oneOf(["variant-4", "variant-2", "default"]),
    className: PropTypes.string, // Add PropTypes for className
    text: PropTypes.string, // Add PropTypes for text
};
