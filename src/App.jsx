import React from 'react'
import style from './App.module.css'

import Button from './components/Button'
import icon from './assets/martinIcon.svg'

export default function App() {
  return (
    <div className={style.appContainer}>
      <div className={style.titleContainer}>
        <h1>Calculator</h1>
        <img src={icon} />
      </div>
      <div>
        <div className={style.output}>output</div>
      </div>
      <div className={style.calbody}>       
        <div className={style.row}>
          <Button>AC</Button>
          <Button className={style.delete}>DEL</Button>
          <Button>%</Button>
        </div>
        <div className={style.row}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>*</Button>
        </div>
        <div className={style.row}>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>+</Button>
        </div>
        <div className={style.row}>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>-</Button>
        </div>
        <div className={style.row}>
          <Button>.</Button>
          <Button>0</Button>
          <Button className={style.equal}>=</Button>
        </div>
      </div>
    </div>
  )
}
