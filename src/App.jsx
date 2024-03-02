import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import React from "react"


import SimpleCounter from "./simplecounter";


function App(props) {

  return (
		<>
	<SimpleCounter
  uno = {props.digitoUno}
  dos = {props.digitoDos}
  tres = {props.digitoTres}
  />
		</>
		
		);
}

export default App
