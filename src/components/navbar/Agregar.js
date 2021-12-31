import { Button } from "antd"
import { PlusOutlined  } from '@ant-design/icons';
import { useNavigate } from "react-router";

export const Agregar = () => {
  const navigate = useNavigate();

    return (
      <Button className='agrpelicula' ghost shape="circle" icon={<PlusOutlined style={{fontSize:20}} onClick={()=>navigate("/agregar/pelicula")} />}   />
    )
}
