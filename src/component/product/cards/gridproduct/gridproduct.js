import React from 'react'
import './gridproduct.css'
export default function Gridproduct(props) {

const images = props.info.images;


  return (
    <div className="top-img-group">
            <div className="frame">
              <div className="imgB god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img1}&cache-control=max-age=172800"')` }}
></div>
              <div className="imgS god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img2}&cache-control=max-age=172800"')` }}></div>
            </div>
            <div className="frame-3 god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img3}&cache-control=max-age=172800"')` }}></div>
            <div className="frame">
                <div className="imgS god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img4}&cache-control=max-age=172800"')` }}></div>
                <div className="imgB god" style={{ background: `url('https://drive.google.com/uc?export=view&id=${images.img5}&cache-control=max-age=172800"')` }}></div>
            </div>
        </div>
  )
}
