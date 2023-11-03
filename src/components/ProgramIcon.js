import React from 'react'
import Draggable from 'react-draggable';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectBorder, deselectBorder,  showWindow, hideWindow } from '../slices/programDataSlice'

function ProgramIcon({program_name, program_id, initialX, initialY}) {
    const icon_id = program_id + '-icon';
    const selected_button = useSelector((state) => state.programData)
    const dispatch = useDispatch()
    const window_name = program_id + '-window'
    const window_div = useSelector((state) => state.shower)
    
    const mbOnClick = () => {

        if(selected_button.value !== program_id){
            dispatch(deselectBorder())
            dispatch(showWindow(program_id))
        }else if(selected_button.value == program_id){
            dispatch(deselectBorder())
            dispatch(hideWindow(program_id))
        }
    }
    const [hoverState, setHover] = useState(false) 
    
    const setHoverTrue = () => {
        setHover(true)
    }
    
    const setHoverFalse = () => {
        setHover(false)
    }
  
    return (
        <Draggable zIndex={-1} handle='.handle'>
            <div id={'button-div'} className='handle' 
                style={{
                    position: 'absolute',
                    left: `${initialX}%`,
                    top: `${initialY}%`,
                }}>
                <button className={'menu-button'} onMouseEnter={setHoverTrue} onMouseLeave={setHoverFalse} onClick={mbOnClick}
                style={
                {//display: 'block',
                backgroundColor: hoverState ? 'rgba(51, 204, 255, 0.5)': (selected_button.value === program_id && selected_button.highlight) ? 'rgba(51, 204, 255, 0.3)' : 'transparent',
                width: '102',
                height: '128px',
                textAlign: 'center',
                //marginLeft: '18px',
                //position: 'absolute',
                lineHeight: '0px',
                border: 'none',
                cursor: 'pointer',}
                }>
                <div id={icon_id}/>
                <p style={{paddingTop: '0px', color: 'black', textShadow: '1px 2px white'}}>
                    {program_name}
                </p>
                </button>
            </div>
        </Draggable>
    )
}

export default ProgramIcon