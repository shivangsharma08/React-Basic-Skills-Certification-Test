import React from 'react';

function Slides({slides}) {


  function slidesNextHandler () {
      
    console.log('next clicked');
    slides.map(function(s, index) {
      return( 
        <div id="slide" className="card text-center">
          <h1 data-testid="title">{s.title}</h1>
          <p data-testid="text">{s.text}</p>
        </div>
     
        
      );
    })
  }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined">Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small" onClick={slidesNextHandler}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Today's Workout Plan</h1>
                <p data-testid="text">We're gonna do 3 fundamental exercises.</p>
            </div>
            
        </div>
    );

}

export default Slides;
