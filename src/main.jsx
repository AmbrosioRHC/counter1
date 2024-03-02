import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let root = ReactDOM.createRoot(document.getElementById('root'))

let number = 0;

setInterval(() => {

  const calculandoDigitoTres = Math.floor((number % 1000) / 100);
  const calculandoDigitoDos = Math.floor((number % 100) / 10);
  const calculandoDigitoUno = number % 10;

  root.render(
    <React.StrictMode>
      <App
        digitoTres={calculandoDigitoTres}
        digitoDos={calculandoDigitoDos}
        digitoUno={calculandoDigitoUno}
      />
    </React.StrictMode>,
  )

  number++;
}, 1000)

