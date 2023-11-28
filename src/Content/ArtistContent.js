import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTransfer } from '../slices/programDataSlice'
function ArtistContent({window_height}) {
  const selected_button = useSelector((state) => state.programData)
  const dispatch = useDispatch()
  const applyStyleTransfer = () => {
    if(!selected_button.transferBusy){
      console.log('hi')
      dispatch(setTransfer([true, true]))
    }
  }

  return (
    <div id='artist-content-parent'
        style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div id='artist-content-portrait' 
                style={{
                    //position: 'relative',
                    backgroundImage: 'url(' + require('../img/monet-portrait.png')  + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    borderStyle: 'solid solid solid solid',
                    borderWidth: '1px',
                    width: '30%',
                    height: `${(window_height)*.96}px`,
                    marginTop: '0.5%',
                    marginLeft: '0.5%',
                    
                }}>
                  
            </div>
            <div id='artist-content-info' 
              style={{
                width: '68%',
                //position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '0.5%',
                marginLeft: '0.5%',
                
              }}>
                <div id='artist-content-info-artist'
                  style={{
                    position: 'relative',
                    borderStyle: 'solid solid solid solid',
                    borderWidth: '1px',
                  }}>
                    <p style={{
                      textAlign: 'left',
                      padding: '0px 10px 0px 10px',
                    }}>
                      Claude Monet 
                      <br/>
                      <br/>
                      Claude Monet (1840-1926) was a French Impressionist painter known for his iconic works featuring water lilies, haystacks, and the Rouen Cathedral. His art focused on capturing the effects of light and atmosphere in outdoor scenes, making him a pivotal figure in the Impressionist movement.
                    </p>
                </div>

                <div id='artist-content-info-works-and-model'
                  style={{
                    display: 'flex',
                  }}>
                    <div id='artist-content-info-works'
                      style={{
                      //position: 'absolute',
                      marginTop: '0.5%',
                      borderStyle: 'solid solid solid solid',
                      borderWidth: '1px',
                      
                      }}>
                      <p style={{
                        textAlign: 'left',
                        padding: '0px 10px 12px 10px',
                      }}>
                        Famous Works:
                        <br/>
                        • Rouen Cathedral, Facade (Sunset)<br/>
                        • Woman with a Parasol, 1875<br/>
                        • Nymphéas (Waterlilies)<br/>
                        
                      </p>
                    </div>
                    <div id='artist-content-info-model'
                      style={{
                      //position: 'absolute',
                      marginTop: '0.5%',
                      marginLeft: '0.5%',
                      borderStyle: 'solid solid solid solid',
                      borderWidth: '1px',
                      flex: '1'
                      }}>
                      

                      <button 
                      onClick={() => applyStyleTransfer()}
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                      }}> 
                        Apply Style Transfer
                        <br/><br/>
                        Model: C.U.T
                      </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ArtistContent