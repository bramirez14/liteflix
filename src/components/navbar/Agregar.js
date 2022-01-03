import { Button, Grid } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

import './css/agregar.css'
const { useBreakpoint } = Grid;
export const Agregar = () => {
const screens = useBreakpoint();

  const navigate = useNavigate();

  return (
    <>
       <Button
      className="agrpelicula"
    
      ghost
      shape="circle"
      icon={
        <PlusOutlined
         style={{ fontSize: 20,color:'#ffff' }}
          onClick={() => navigate("/agregar/pelicula")}
        />
      }
    >
   { screens.md && <span className='text-agregar' onClick={() => navigate("/agregar/pelicula")}  > AGREGAR PELICULA </span>} 
    </Button>
    </>
 
  );
};
