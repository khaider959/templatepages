import React from 'react'

function Header() {
  return (
    <>
    <header className="w3-display-container w3-content w3-wide" style={{maxWidth: "1500px"}} id="home">
  <img className="w3-image" src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Architecture" style={{width:"100%" ,height:"800"}} />
  <div className="w3-display-middle w3-margin-top w3-center">
    <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span className="w3-hide-small w3-text-light-grey">Architects</span></h1>
  </div>
</header>
    </>
  )
}

export default Header