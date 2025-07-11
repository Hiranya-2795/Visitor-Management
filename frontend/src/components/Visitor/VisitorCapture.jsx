import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VisitorCapture.css';

function VisitorCapture() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [stream, setStream] = useState(null);
  const [captured, setCaptured] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  const visitorExists = true; // 🔁 change to true if matching a known visitor

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error('Camera error:', err);
        alert('Please allow camera access');
      }
    };

    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL('image/png');
      setImageSrc(imageDataUrl);
      setCaptured(true);
      stopCamera();
    }
  };

  const handleRegister = () => {
    navigate('/visitor/register');
  };


  const handleCheckIn=()=>{
    navigate('/visitor/register');
  };
  const handleCheckOut = () => {
  navigate('/visitor/feedback');
  };

  return (
    <div className="visitor-capture">
      <h2>Visitor Face Capture</h2>

      {!captured && <video ref={videoRef} autoPlay muted playsInline />}
      {captured && imageSrc && <img src={imageSrc} alt="Captured Face" className="captured-img" />}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {!captured && (
        <button className="capture-btn" onClick={handleCapture}>
          Capture
        </button>
      )}

      {captured && (
        <>
          <p className={`status-msg ${visitorExists ? 'found' : 'not-found'}`}>
            {visitorExists ? '✅ Visitor found' : '❌ Visitor not found'}
          </p>
          <div className="button-group">
            {!visitorExists && (
              <button className="retry-btn" onClick={handleRegister}>
                Register Visitor
              </button>
            )}
            {visitorExists && (
              
              <button className="checkout-btn" onClick={handleCheckOut}>
                Check-Out
              </button>

            )}
            {
              <button className="checkin-btn" onClick={handleCheckIn}>
                Check-In
              </button>

            }
          </div>
        </>
      )}
    </div>
  );
}

export default VisitorCapture;
