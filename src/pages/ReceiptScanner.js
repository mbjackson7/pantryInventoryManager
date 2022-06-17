import './ReceiptScanner.css';
import React from 'react';
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;


function ReceiptScanner() {

  async function handleClick(imageData) {
    console.log(imageData);
  }

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: { exact: "environment" }
  };
  
  const WebcamCapture = () => (
    <Webcam
      audio={false}
      height={500}
      screenshotFormat="image/png"
      width={500}
      videoConstraints={videoConstraints}
    >
      
      {({ getScreenshot }) => (
        <button
          className="Button"
          onClick={() => {
            handleClick(getScreenshot())
          }}
        >
          Capture Image
        </button>
      )}
    </Webcam>
  );

  return (
    <div className="App">
      <header className="App-header">
          <WebcamCapture />
      </header>
    </div>
  );
}

export default ReceiptScanner;