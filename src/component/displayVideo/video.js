import React, { useRef, useEffect } from 'react';
import './video.css';

export const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play().catch(error => {
        console.error('Video playback error:', error);
      });
    };

    // Use the 'canplay' event to trigger video playback when it's ready
    video.addEventListener('canplay', playVideo);

    // Clean up event listener on unmount
    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline ref={videoRef}>
        <source src="videohome.mp4" type="video/mp4" />
      </video>
      <div className="content" style={{ display: 'none' }}>
        <h1>Customized Beyond Imagination</h1>
        <div className="ordernowhome">Order Now</div>
      </div>
    </div>
  );
};
