import React from 'react'
import Draggable from 'react-draggable'
import { useSelector, useDispatch } from 'react-redux'
import { selectBorder, deselectBorder, showWindow, hideWindow, updateTopWindow } from '../slices/programDataSlice'
import {useState} from 'react';

function Window({id, content, window_text, windowWidth, windowHeight, initialX, initialY, closeable}) {
  
  const selected_button = useSelector((state) => state.programData)
  const dispatch = useDispatch()
  const window_id = id + '-window';
  const width = windowWidth
  const height = windowHeight
  const minWindow = () => {
    dispatch(deselectBorder())
    dispatch(hideWindow(id))
  }

  const updateZ = () => {
    if (selected_button.topWindow != id){
      dispatch(updateTopWindow(id))
      console.log('change success')
    }
  }

  return (
    <Draggable handle='.handle'
    onMouseDown={() => updateZ()}
      >
      <div id={window_id} name={id+'-window-parent'} 
        style={{
          position: 'absolute',
          display: closeable ? selected_button.window_data.find((w) => w.name == id).display : 'inline',
          width: `${width}px`,
          height: `${height}px`,
          left: `${initialX}%`,
          top: `${initialY}%`,
          zIndex:  `${selected_button.window_data.find((w) => w.name == id).zIndex}`,
          }}>
        <div id={window_id} name={id+'-window-handle'} className='handle'
          style={{
            backgroundColor:'rgb(0, 0, 0)',
            width: `${width}px`,
            height: '25px',
            display: 'flex',
            boxSizing: 'border-box',
            position: 'relative',
            cursor: 'grab',
            // borderStyle: 'solid solid solid solid',
            // borderColor: 'white',
            // borderWidth: '1px',
          }}>
          <p style={{
              //display: 'inline-block', 
              //paddingLeft:'0%', 
              paddingTop:'4px', 
              margin: '0px',
              marginLeft: '0.75%',
              color: 'rgb(255,255,255)',
              //marginBlockStart: '0em',
              //marginBlockEnd: '0em',
              //paddingTop: '0.5%',
              //color: 'white',
              //textShadow: '1px 2px black', 
              //position: 'absolute',
              textOverflow: 'ellipsis',
              cursor: 'default',
              fontWeight: 'bold',}}>
                {window_text}
          </p>
          
          <button onClick={() => minWindow()}
              style={{ 
                marginLeft: 'auto', 
                marginRight: '0.5%',
                marginTop: '4px', 
                display: closeable ? 'inline-block': 'none', 
                //position: 'absolute', 
                borderRadius:'8%', 
                width: '16px', 
                height: '16px', 
                border: '1px solid black', 
                backgroundColor: 'rgb(255,255,255)',
                cursor: 'pointer',
                alignSelf: 'right',
                textAlign: 'center',
                paddingLeft: '2px',
                //paddingRight: 'auto',
                }}>
                  ─
          </button> 
        </div>
        <div id={window_id} name={id+'-window-body'}
          style={{ backgroundColor:'rgb(255, 255, 255)', 
          //margin: 'auto',
          width: `${width}px`, 
          height: `${height}px`,
          boxSizing: 'border-box', 
          //outline: '5px ridge rgb(235, 186, 178)',
          //outlineOffset: '-5px',
          padding: '0px',
          marginTop: '0px' ,  
          overflow: 'auto', 
          position: 'absolute',
          borderStyle: 'none solid solid solid',
          borderWidth: '2px'}}>
            {content}
        </div>
      </div>
    </Draggable>
  )
}

export default Window