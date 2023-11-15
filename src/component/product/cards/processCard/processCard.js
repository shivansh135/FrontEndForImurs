import React from "react";
import "./processCard.css";

export const ProcessContainer = () => {
  return (
    <div className="process-container">
      <div className="heading">
        <div className="sub-title">A Hassle Free</div>
        <div className="title">Twelve Minute Process</div>
      </div>
      <>
      <div id="carouselExampleIndicators2" class="carousel slide" style={{ maxWidth: "720px" }}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="Process_Card_1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Process_Card_2.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Process_Card_3.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </>
    </div>
  );
};










/*<div className="process-wrap">
                <div className="process">
                    <img className="vector" alt="Vector" src="step1.svg" />
                    <div className="text-wrap">
                        <div className="text-wrapper">1) Submit the visuals</div>
                        <p className="div">
                            After placing the order, you get an iForm to upload your visuals for the magazine with custom
                            instruinstructions.
                        </p>
                    </div>
                </div>
                <div className="process">
                    <img className="vector" alt="Vector" src="step2.svg" />
                    <div className="text-wrap">
                        <div className="text-wrapper">1) Submit the visuals</div>
                        <p className="div">
                            After placing the order, you get an iForm to upload your visuals for the magazine with custom
                            instruinstructions.
                        </p>
                    </div>
                </div>
            </div> */