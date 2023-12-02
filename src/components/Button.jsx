import React from 'react'

import style from './Button.module.css'

export default function Button({children, inputHandler}) {

  function isOperator (value) {
    return isNaN(value) && (value !== '.') && (value !== '=')
  } 

  const bigger = value => {
    return (value === '=') || (value === 'DEL')
  }

  return (
    <div className={`${style.button} ${isOperator(children) && style.operator } ${bigger(children) && style.bigger}`}
      onClick={()=>inputHandler(children)}
    >
      {children}
    </div>
  )
}
