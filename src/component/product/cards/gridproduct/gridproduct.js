import { color } from 'framer-motion';
import React from 'react';
import './gridproduct.css';

export default function ImageCarousel(props) {
  const images = props.info.images;

  // Assuming props.info.images is an object with properties like img1, img2, etc.
  const imageKeys = Object.keys(images);

  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-indicators" style={{maxWidth:'720px'}} >
        {imageKeys.map((key, index) => (
          <button
            key={index}
            style={{backgroundColor:'black'}}
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imageKeys.map((key, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={`https://drive.google.com/uc?export=view&id=${images[key]}&cache-control=max-age=172800`}
              className="d-block w-100 carousel-image"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon" aria-hidden="true"   style={{filter:'brightness(0%)'}}></span>
        <span className="visually-hidden" >Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next" >
        <span className="carousel-control-next-icon" aria-hidden="true"  style={{filter:'brightness(0%)'}}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}











// import React from 'react'
// import './gridproduct.css'
// export default function Gridproduct(props) {

// const images = props.info.images;


//   return (
//     <div className="top-img-group">
//             <div className="frame">
//               <div className="imgB god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img1}&cache-control=max-age=172800"')` }}
// ></div>
//               <div className="imgS god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img2}&cache-control=max-age=172800"')` }}></div>
//             </div>
//             <div className="frame-3 god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img3}&cache-control=max-age=172800"')` }}></div>
//             <div className="frame">
//                 <div className="imgS god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img4}&cache-control=max-age=172800"')` }}></div>
//                 <div className="imgB god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img5}&cache-control=max-age=172800"')` }}></div>
//             </div>
//         </div>
//   )
// }
