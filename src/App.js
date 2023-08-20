import './App.css';
import React from 'react'
import AnimationButton from './AnimationButton';

function App() {
  const basicAnimations = [
    { label: 'None', value: '' },
    { label: 'Pulse', value: 'pulse' },
    {label: 'Bounce', value: 'bounce'},
    {label: 'Flash', value: 'flash'} ,
    
  ];
  const advancedAnimations =[
    { label: 'None', value: '' },
    { label: 'Spin', value: 'spin' },
  { label: 'Zoom In', value: 'zoomIn' },
  { label: 'Zoom Out', value: 'zoomOut' },
  { label: 'Slide In Left', value: 'slideInLeft' },
  ]
  const customAnimations = [
    { label: 'None', value: '' },
    { label: 'Wobble', value: 'wobble' },
    { label: 'Swing', value: 'swing' },
  { label: 'Shake', value: 'shake' },
  ];
  
  
  return (
    <div className='App max-w-4xl mx-auto p-4'>
    <header className="app-header">
    <div className="header-content">
          <h1 className="app-title bg-green-500 p-4 rounded shadow">Tailwind CSS Animation Visualizer</h1>
          
        </div>
    <p className="app-description">
    Elevate Your UI: Explore Enchanting Animations.
    </p>
  </header>
  
      <AnimationButton title={"Basic"} animations={basicAnimations} />
      <AnimationButton title={"Advanced"} animations={advancedAnimations} />
      <AnimationButton title={"Custom"} animations={customAnimations} />
    </div>
  );
}

export default App;
