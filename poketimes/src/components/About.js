import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi, repudiandae architecto nobis maxime, autem id assumenda eveniet beatae dolor tempora et sed quos quo dolorum consectetur totam laborum qui!</p>
    </div>
  )
}

export default Rainbow(About);