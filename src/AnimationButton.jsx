import React, { useState } from 'react'
import './AnimationButton.css'
const AnimationButton = ({title,animations,darkMode}) => {
    const [isActive, setIsActive] = useState(false);
    const [animation, setAnimation] = useState('')
  const animate = () => {setIsActive(isActive=>!isActive);console.log(isActive);console.log(`animate-${animation}`);}
  
  
  
  return (
    <div className={`container`}>
    <h2 className='text-4xl p-4'>{title} Animations</h2>
    <div className='flex-container '>
    
    <select value={animation}
    onChange={e => setAnimation(e.target.value)}>
    {animations.map(a => (
      <option key={a.value} value={a.value}>{a.label}</option>
    ))}
  </select>
    <span
    className={`animated-text ${isActive ? `animate-${animation}` : ''}`}>  
  
    Animated Text
  </span>

  </div>
    <button
      className="button"
      onClick={animate}
    >
    {`Animation ${isActive ? 'Stop' : 'Start'}`}
    </button>
    
   </div>
  )
}

export default AnimationButton