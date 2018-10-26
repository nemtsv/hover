import React, { useRef } from 'react';
import { render } from 'react-dom';
import useHover from './';

function App() {
  let containerRef = useRef(null);
  let isHovered = useHover(containerRef);

  return <div ref={containerRef} style={{ width: 100, height: 50, background: isHovered ? 'lime' : 'lightgray' }}>
    {isHovered ? 'I am hovered' : 'Hover me'}
  </div>;
}

render(<App />, window.root);
