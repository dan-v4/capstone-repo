import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'hi',
    highlight: false,
    artist_shown_di: '',
    topWindow: '',
    topZ: 12,
    applyTransfer: false,
    transferBusy: false,
    window_data: [
        {
            name: 'di',
            display: 'none',
            zIndex: 12,
        },
        {
            name: 'info',
            display: 'none',
            zIndex: 12,
        }
    ]
}

export const programDataSlice = createSlice({
    name: 'programData',
    initialState,
    reducers:{
        selectBorder: (state, action) =>{
            state.value = action.payload
            state.highlight = true
        },
        deselectBorder: (state) =>{
            state.value = ''
            state.highlight = false
        },
        showWindow: (state, action) =>{
            const indexOfWindow = initialState.window_data.indexOf(initialState.window_data.find((w) => w.name === action.payload)); 
            state.value = action.payload
            state.highlight = true
            
            state.topZ = state.topZ + 1
            state.topWindow = action.payload

            state.window_data[indexOfWindow].display = 'inline' 
            state.window_data[indexOfWindow].zIndex = state.topZ
            
            //state.artist_shown_di = action.payload
        },
        hideWindow: (state, action) =>{
            const indexOfWindow = initialState.window_data.indexOf(initialState.window_data.find((w) => w.name === action.payload));
            state.value = ''
            state.highlight = false
            state.window_data[indexOfWindow].display = 'none' 
            //state.artist_shown = ''
        },
        updateTopWindow: (state, action) => {
            state.topZ = state.topZ + 1
            state.topWindow = action.payload 
            const indexOfWindow = initialState.window_data.indexOf(initialState.window_data.find((w) => w.name === action.payload));
            state.window_data[indexOfWindow].zIndex = state.topZ 
        },
        setTransfer: (state, action) => {
            state.applyTransfer = action.payload[0]
            state.transferBusy = action.payload[1]
        }
    }
})

export const { selectBorder, deselectBorder, showWindow, hideWindow, updateTopWindow, setTransfer} = programDataSlice.actions

export default programDataSlice.reducer