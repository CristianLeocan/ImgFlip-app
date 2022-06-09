import React, { useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

export default function App() {

  const [color, setColor] = useState(true)

  function changeColor() {
    setColor(oldColor => !oldColor)
  }

  return(
    <div>
      <Header 
        color={color} 
        changeColor={changeColor}
      />
      <Content />
      <Footer color={color}/>      
    </div>
  )
}