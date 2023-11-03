import React from "react";
import { ButtonSecondary } from "../../../button/button";
import "./decorCard.css";

export const DecorCard = () => {
    return (
        <>
        <div className="container-desktop">
            <div className="decor-card">
                <div className="img-cont">
                    <img className="img" alt="Img" src="Living_Room.png" />
                </div>
                <div className="cont">
                    <div className="headin">
                        <div className="name">Rishika’s</div>
                        <div className="catigory">Living Room</div>
                    </div>
                    <div className="text-wrap">
                        <p className="text">
                        She used her wedding magazine as a decor element on her coffee table and cherishes her wedding memories, everyday.
                        </p>
                        <ButtonSecondary direction={true} to="/plans" text={'Renovate Yours Living Room'}/>
                    </div>
                </div>
            </div>
            <div className="decor-card">
                <div className="img-cont">
                    <img className="img" alt="Img" src="Bed_Room.png" />
                </div>
                <div className="cont">
                    <div className="headin">
                        <div className="name">Rishika’s</div>
                        <div className="catigory">Bed Room</div>
                    </div>
                    <div className="text-wrap">
                        <p className="text">
                        She used her wedding magazine as a decor element on side table and cherishes her wedding memories, everyday.
                        </p>
                        <ButtonSecondary direction={true} to="/plans" text={'Renovate Yours Bed Room'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-mobile">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{filter:"brightness(0%)",width:"40px",height:"1px"}}></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{filter:"brightness(0%)",width:"40px",height:"1px"}}></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="6000">
                    <div className="decor-card">
                    <div className="img-cont">
                        <img className="img" alt="Img" src="Living_Room.png" />
                    </div>
                    <div className="cont">
                        <div className="headin">
                            <div className="name">Rishika’s</div>
                            <div className="catigory">Living Room</div>
                        </div>
                        <div className="text-wrap">
                            <p className="text">
                                She used her wedding magazine as a decor element on her coffee table and cherishes her wedding memories,
                                everyday.
                            </p>
                            <ButtonSecondary direction={true} to="/plans" text={'Renovate Yours living room'}/>
                        </div>
                    </div>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="6500">
                    <div className="decor-card">
                    <div className="img-cont">
                        <img className="img" alt="Img" src="Bed_Room.png" />
                    </div>
                    <div className="cont">
                        <div className="headin">
                            <div className="name">Ridhima's</div>
                            <div className="catigory">Bed Room</div>
                        </div>
                        <div className="text-wrap">
                            <p className="text">
                            She used her wedding magazine as a decor element on side table and cherishes her wedding memories, everyday.
                            </p>
                            <ButtonSecondary direction={true} to="/plans" text={'Renovate Yours Bed Room'}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
        
        
    );
};
