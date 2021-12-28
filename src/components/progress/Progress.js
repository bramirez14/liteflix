import {ProgressBarLine} from 'react-progressbar-line'
import './progress.css'
import React from 'react'

export const Progress = ({porcentaje}) => {
    return (
        <>
        <div className='contenedor-progress'>
        <p className='carga'> Cargando {porcentaje}%  </p>
       
             <div id="progress">
    <div id="bar" style={{width:`${porcentaje}+%` }}></div>
</div>
       </div>
        </>
     
    )
}



