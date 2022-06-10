import React, { useEffect, useRef } from 'react'

export default function SignalStatus({color}) {
    
  return (
    <div className='container' style={{}} >
        <a className='circle photo' style={{background: color, border: color}}></a>
        <div className='circle' style={{background: color, border: color}}></div>
    </div>
  )
}
