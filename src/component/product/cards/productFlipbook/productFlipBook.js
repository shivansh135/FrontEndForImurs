import React, { useEffect } from "react";
import { ButtonSecondary } from "../../../button/button";
import Flipbook from "../../../dearFlip/dearFlip";
import "./productFlipBook.css";

export const ProductFlipBook = (props) => {
    const driveLink = props.pdf;
    // Regular expression to match the ID
    const idRegex = /\/file\/d\/([A-Za-z0-9_-]+)/;
    const match = driveLink.match(idRegex);
    console.log(props)
    useEffect(() => {
        function setProductScreen() {
            // Adjust the style when the entire page is fully loaded
            const prodFlipbook = document.querySelector('#prod-flipbook');
            if (prodFlipbook) {
                prodFlipbook.style.width = "100%";
                prodFlipbook.style.height = "auto";
            }
        };
        setProductScreen();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="flipbook-container-product">
            <div id="prod-flipbook" className="flipbook" alt="Flipbook" style={{backgroundImage: `url('https://drive.google.com/uc?export=view&id=${props.thumb}&cache-control=max-age=172800')`}}>
                <Flipbook source={`https://apis.iamyourstory.in/api/downloadpdf/${match[1]}`}/>
            </div>
            <div className="cont">
                <div className="text-wrap">
                    <p className="tag">
                        {props.text}
                    </p>
                </div>
                <ButtonSecondary direction={true} to="/plans"/>
                <p className="price">Starts at Just ₹999</p>
            </div>
        </div>
    );
};
