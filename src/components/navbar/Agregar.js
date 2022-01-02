import { Button, Grid } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

import './agreagar.css'
const { useBreakpoint } = Grid;
export const Agregar = () => {
const screens = useBreakpoint();

  const navigate = useNavigate();

  return (
    <>
       <Button
      className="agrpelicula"
     /*  ghost */
      shape="circle"
      type={screens.md&&'link'}
      icon={
        <PlusOutlined
          style={{ fontSize: 20 }}
          onClick={() => navigate("/agregar/pelicula")}
        />
      }
    >
   { screens.md && <span className='text-agregar'> AGREGAR PELICULA </span>} 
    </Button>
    </>
 
  );
};
