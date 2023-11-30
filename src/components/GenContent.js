import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import { useSelector, useDispatch } from 'react-redux'
import { setTransfer } from '../slices/programDataSlice'
function GenContent({ initialX, initialY }) {
  const selected_button = useSelector((state) => state.programData)
  const webcamRef = React.useRef(null);
  const dispatch = useDispatch()
  const [showStyle, setShowStyle] = useState(false)
  const [styled_image, setStyledImage] = useState('')
  const videoConstraints = {
    width: 750,
    height: 750,
    facingMode: "user"
  };

  useEffect(() => {
    const sendWebcamFrameBase64 = async () => {
      var imageSrc = webcamRef.current.getScreenshot();
      imageSrc = imageSrc.replace('data:image/webp;base64,','')
      console.log(typeof(imageSrc))
      console.log(imageSrc.replace('data:image/webp;base64,',''))
      try{
        const response = await fetch('https://4db5-2607-f2c0-eeea-20-8138-95aa-2be2-df56.ngrok-free.app/predict/monet2photo_256_cut', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ image: imageSrc}),
                });
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        setStyledImage(responseData.image)
        setShowStyle(true)
      } catch(error){
        console.error('Error',error)
      }
    } 

    if(selected_button.applyTransfer){
      sendWebcamFrameBase64()
      //console.log(imageSrc)
      //console.log(typeof(imageSrc))
      dispatch(setTransfer([false, false]))
    }
    
  },[selected_button.applyTransfer])
  
  const previewSelect= () => {
    if(showStyle){
      return(
        <div style={{ 
            position: 'absolute',
            left: `${initialX}%`,
            paddingTop: `${initialY}%`,
            }}>
          <img
            src={`data:image/webp;base64,${styled_image}`}>
            
          </img>
        </div>
      )
    }else{
      return(
        <Webcam ref={webcamRef} screenshotFormat={'image/webp'} videoConstraints={videoConstraints} 
          style={{ 
            position: 'absolute', 
            left: `${initialX}%`,
            paddingTop: `${initialY}%`,
            //visibility: 'hidden',  
            zIndex: 1 
            }}>

        </Webcam>
      )
    }
  }

  return (
    <div id='gen-content' style={{
      display: 'flex',
      //justifyContent: 'space-between',
      gap: '0.75%',
      position: 'relative',
      left: `${initialX}%`,
      top: `${initialY}%`,
      // width: '0px',
      // height: '0px',
      //borderStyle: 'solid',
      //borderWidth: '5px',
      //padding: '10px 0px',
      zIndex: 1,
    }}>
      {previewSelect()}
      <button 
        onClick={() => setShowStyle(false)}
        style={{ 
          position: 'relative',
          left: `${initialX*18}%`,
          marginTop: `${initialY*14.5}%`,
          z: 5,
          cursor: 'pointer',
         }}>
          Clear Preview
      </button>    
    </div>
  )
}

export default GenContent