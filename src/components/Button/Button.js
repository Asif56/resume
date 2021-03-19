import { Button } from '@material-ui/core'
import React from 'react'
import './Button.css'
const CustomButtom = ({icon,text}) => {
  return (
   <Button
  className='custom_btn' endIcon={icon ? <div className='btn_icon_container'>{icon}</div>:null}
   >
       <span className="btn-text">{text}</span>
   </Button>
   
  )
}

export default CustomButtom
