import React from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

function App({slides}) {
  slides=[
    {
      title: "Today's Workout Plan",
      text: "We're gonna do 3 fundamental exercises."
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Bend your knees carefully/"
    }
]
console.log(slides)
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default App;
