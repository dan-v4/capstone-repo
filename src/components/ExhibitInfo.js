import React from 'react'

function ExhibitInfo() {
  return (
    <div id='exhibit-info'>
        <h1 style={{textAlign: 'center'}}>Digital Impressionism: Bridging Time through GANs</h1>
        <p style={{
            textAlign: 'left',
            padding: '0px 200px 0px 50px',
        }}>
            
            <i>Impressionism</i>
        </p>
        <p p style={{
            textAlign: 'left',
            padding: '0px 200px 0px 10px',
        }}>
        a 19th-century art movement, emphasized capturing light and color in everyday scenes with loose brushwork and vibrant colors. Artists like Monet and Renoir broke from tradition, inspiring subsequent movements and leaving a lasting artistic legacy.
        </p>
        <p style={{
            textAlign: 'left',
            padding: '0px 10px 0px 300px',
        }}>
            <i>Digital Impressionism</i>
        </p>
        <p style={{
            textAlign: 'left',
            padding: '0px 10px 0px 330px',
        }}>
            How might Monet's artworks appear in contemporary times? In this engaging mini-exhibition, we aim to connect the historical Impressionist period with the modern day through the use of General Adversarial Networks (GANs). This specialized GAN is trained on Monet's artistic style to acquire his distinctive essence, which is subsequently employed to enhance a capture of a webcam feed.
        </p>
    </div>
  )
}

export default ExhibitInfo