import './InputContainer.css';
import React from 'react'

export default function InputContainer({label, bgColor, children}) {
  return (
    <div className='inputCon_container' style={{backgroundColor: bgColor}}>
        <label className='inputCon_label'>{label}</label>
        <div className='inputCon_content'>{children}</div>
    </div>
  )
}
