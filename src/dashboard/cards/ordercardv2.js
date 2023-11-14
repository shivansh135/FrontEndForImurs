import React from "react";
import "./ordercardv2.css";
import ico from ".//defaultmag.jpg";
export const OrderCardV2 = (props) => {
    const formattedDate = dateConvert(props.order.createdAt);

    function dateConvert(str) {
        const date = new Date(str);

        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }
    console.log(props)

    return (
        <div className="order-cardV2">
            <img className="image" src={ico} />
            <div className="cont">
                <div className="text-wrap">
                    <div className="main-cont">
                        <div className="group">
                            <div className="overlap-group">
                            </div>
                        </div>
                        <p className="name">
                            <span className="text-wrapper">
                               {props.order.customerName}
                                <br />
                            </span>
                            <span className="span"> {formattedDate}</span>
                        </p>
                    </div>
                    <div className="flex">
                        <div className="div">
                            <div className="text">ORDER STATUS</div>
                            <div className="status-cont">
                                <img className="icon" alt="Icon" src={`logos/status/${props.img}.svg`} />
                                <div className="status">{props.status}</div>
                            </div>
                        </div>
                        <div className="share">
                            <img className="img" alt="Share" src="share.svg" />
                        </div>
                    </div>
                </div>
                <div className="button">
                    <div className="text-2">{props.buttonstatus}</div>
                </div>
            </div>
        </div>
    );
};
