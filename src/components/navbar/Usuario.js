import { Badge } from "antd";
import { BotonHamburguesa } from "./BotonHamburguesa";
import { FiBell} from "react-icons/fi";
import "./usuario.css";
export const Usuario = () => {
  return (
    <>
      <div className='container-usuario'>
        <div className='cont-hamb'>
          <BotonHamburguesa />
        </div>
        <div className='cont-camp'>
        <Badge dot size="large" color="#64EEBC" >
        < FiBell className='icon-campana' style={{marginTop:6}}/>
          </Badge>
        </div>
        <div className='cont-perfil'> 
          <div className="perfil"> </div>
        </div>
      </div>

   
    </>
  );
};
