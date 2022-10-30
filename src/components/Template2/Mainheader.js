import React from 'react'

function Mainheader() {
  return (
    <>
    <header  id="home" style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(https://www.w3schools.com/w3images/mac.jpg)",
        minHeight: "100%",
        paddingTop: "700px",  
    }}>
  <div className="w3-display-left w3-text-white" style={{padding:"48px",marginLeft:"280px",marginTop:"200px"}}>
    <span className="w3-jumbo w3-hide-small">Start something that matters</span><br/>
    <span className="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br/>
    <span className="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
    <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
  </div> 
  
</header>
    </>
  )
}

export default Mainheader