import React from 'react'

import style from './Input.module.css'

export default function Input({input}) {
  return (
    <div className={style.inputContainer}>
      {input}
    </div>
  )
}
