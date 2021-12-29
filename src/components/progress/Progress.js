import {Button} from 'antd'
import './progress.css'
import React from 'react'

export const Progress = ({porcentage,bg='#64EEBC',title='CARGANDO',button='CANCELAR',btncolor='#FFFFFF'}) => {
    return (
        <>
        <div className='container-progress'>
        { title!=='CARGADO'?<span > {title} {bg!=='#FF0000' && `${porcentage}%`}  </span>
       :<span className='load'> {porcentage}% {title} </span>}
             <div id="progress">
    <div id="bar" style={{width:`${porcentage}%`,background:bg,  }}></div>
    <Button className='btn-progress' type='link' style={{color:btncolor}}>{button}</Button>
</div>
       </div>
        </>
     
    )
}



