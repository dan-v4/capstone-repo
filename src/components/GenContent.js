import React from 'react'
import Webcam from "react-webcam";

function GenContent({initialX,initialY}) {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  return (
    <div id='gen-content' style={{
        display: 'flex',
        //justifyContent: 'space-between',
        gap: '0.75%',
        position: 'absolute',
        left: `${initialX}%`,
        top: `${initialY}%`,
        //padding: '10px 0px',
    }}>
         <Webcam>

         </Webcam>
        
         <Webcam>

         </Webcam>
        
    </div>
  )
}

export default GenContent