import "./movie.css";
import {
 StarOutlined
} from '@ant-design/icons';
import { IoPlayOutline,   } from 'react-icons/io5';
import {AiFillStar} from 'react-icons/ai'
export const Movie = ({namemovie, movie}) => {

  return (

<div className="contenedor">
     <figure>
         <img  src={movie}/>
         <div className="capa">
             <h3 >{namemovie}</h3>
         </div>
      
     < div className="logo-play"> <IoPlayOutline className='icon-play' /> </div>
      <div className='calificacion'>
      <AiFillStar className='icon-star'/>  <span className='rating'>7.9</span> 
      </div>
      <span className='anno'> 
          2018
      </span> 
     </figure><div className='gradient'/>
</div>




  );
};
