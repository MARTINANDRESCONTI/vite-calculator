import React, { useState } from 'react'
import style from './App.module.css'

import Button from './components/Button'
import icon from './assets/martinIcon.svg'
import Input from './components/Input'
import { evaluate } from 'mathjs'



export default function App() {

  const [input, setInput] = useState('')

  const inputHandler = inputValue =>{
    setInput(input + inputValue) 
  }

  function acHandler(){   
    setInput(input.split('').pop().join())
  }

  const calculate = () => {
    setInput(evaluate(input))
  }

  return (
    <div className={style.appContainer}>
      <div className={style.titleContainer}>
        <h1>Calculator</h1>
        <img src={icon} />
      </div>
      <div>
        <Input input={input} />
      </div>
      <div className={style.calbody}>       
        <div className={style.row}>
          <span className={style.ac} onClick={acHandler}>AC</span>
          <span className={style.delete} onClick={()=>setInput('')}>DEL</span>
          <Button inputHandler={inputHandler}>/</Button>
        </div>
        <div className={style.row}>
          <Button inputHandler={inputHandler}>1</Button>
          <Button inputHandler={inputHandler}>2</Button>
          <Button inputHandler={inputHandler}>3</Button>
          <Button inputHandler={inputHandler}>*</Button>
        </div>
        <div className={style.row}>
          <Button inputHandler={inputHandler}>4</Button>
          <Button inputHandler={inputHandler}>5</Button>
          <Button inputHandler={inputHandler}>6</Button>
          <Button inputHandler={inputHandler}>+</Button>
        </div>
        <div className={style.row}>
          <Button inputHandler={inputHandler}>7</Button>
          <Button inputHandler={inputHandler}>8</Button>
          <Button inputHandler={inputHandler}>9</Button>
          <Button inputHandler={inputHandler}>-</Button>
        </div>
        <div className={style.row}>
          <Button inputHandler={inputHandler}>.</Button>
          <Button inputHandler={inputHandler}>0</Button>
          <span className={style.equal} onClick={calculate}>=</span>
        </div>
      </div>
    </div>
  )
}
