import React from 'react'
import Draggable from 'react-draggable'

function WindowBase() {
  
  const window_id = 'monet-window';
  const width = 1600
  const height = 1000
  return (
    <Draggable handle='.handle'
      >
      <div id={window_id} name='monet-window-parent'
        style={{
          position: 'absolute',
          display: 'inline',
          width: `${width}px`,
          height: `${height}px`}}>
        <div id={window_id} name='monet-window-handle' className='handle'
          style={{
            backgroundColor:'rgb(76, 201, 240)',
            width: `${width}px`,
            height: '25px',
            display: 'flex',
            boxSizing: 'border-box',
            position: 'relative',
          }}>
          <p style={{
              //display: 'inline-block', 
              //paddingLeft:'0%', 
              paddingTop:'4px', 
              margin: '0px',
              marginLeft: '0.5%',
              //marginBlockStart: '0em',
              //marginBlockEnd: '0em',
              //paddingTop: '0.5%',
              //color: 'white',
              //textShadow: '1px 2px black', 
              //position: 'absolute',
              textOverflow: 'ellipsis',
              cursor: 'default'}}>
                Digital Impressionists
          </p>
          
          <button
              style={{ 
                marginLeft: 'auto', 
                marginRight: '0.5%',
                marginTop: '4px', 
                //display: 'inline-block', 
                //position: 'absolute', 
                borderRadius:'8%', 
                width: '16px', 
                height: '16px', 
                border: '1px solid black', 
                backgroundColor: 'rgb(215,92,140)',
                cursor: 'pointer',
                alignSelf: 'right',
                }}>
          </button>

          <div id={window_id} name='monet-window-exit-button'
            
          >
          </div>  
        </div>
        <div id={window_id} name='monet-window-body'
          style={{ backgroundColor:'rgb(235, 186, 164)', 
          //margin: 'auto',
          width: `${width}px`, 
          height: `${height - 25}px`,
          boxSizing: 'border-box', 
          //outline: '5px ridge rgb(235, 186, 178)',
          //outlineOffset: '-5px',
          padding: '0px',
          marginTop: '0px' ,  
          overflow: 'auto', 
          position: 'absolute'}}>
        
        </div>
      </div>
    </Draggable>
  )
}

export default WindowBase