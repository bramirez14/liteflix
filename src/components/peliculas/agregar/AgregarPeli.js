import { useState } from "react";
import { Row, Col, Button, Form, Input, Grid} from "antd";
import { Logo } from "../../navbar/Logo";
import { Usuario } from "../../navbar/Usuario";
import { CloseOutlined } from "@ant-design/icons";
import { GiPaperClip } from "react-icons/gi";
import { useNavigate } from "react-router";
import axios from "axios";

import "./agregar.css";
import { File } from "../../file/File";
import { Agregadas } from "./Agregadas";
const { useBreakpoint } = Grid;

export const AgregarPeli = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();
const [file, setFile] = useState({})
  const [exito, setExito] = useState(false);
  const handleSubmit = async (values) => {
    let f = new FormData();
    f.append("file", file?.fileList[0]?.originFileObj);
    f.append("title", values.title);
    let result = await axios.post(
      "https://apiliteflix.herokuapp.com/api/liteflix/movies",
      f
    );
    console.log( result);

   if (result.data.status === 200) {
      setExito(true);
      // navigate(`/lista/rendicion/${id}`);
    }
  };
  console.log(screens);
  return (
    <>
     
        
        <div className='container'>
              
        {screens.lg ? <div className='icon-x' onClick={() => navigate('/')}> <CloseOutlined /> </div> :<Row gutter={40} >
      <Col   xs={{ span:6,order: 1 }} sm={{ span:6,order: 1 }} md={{ span:4,order: 1}} lg={{ span:15,order: 2 }} lg={{ span:15,order: 2 }}>
        </Col>
        <Col  xs={{ span:12, order: 2}} sm={{span:12 , order: 2 }} md={{ span:16,order: 2}} lg={{span:4,order: 1 }} lg={{ span:4,order: 1 }}>
          <Logo />
        </Col>
        <Col   xs={{ span:6,order: 3 }} sm={{ span:6,order: 3 }} md={{ span:4,order: 3}} lg={{ span:4,order: 3 }} lg={{ span:4,order: 3, }} 
       
        >
          <Usuario />
        </Col>
      </Row>}


 {exito ? (
  <Agregadas />
) : (
  <>
<Row  className="contenedor-agregar">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <h3 className="agregar">AGREGAR PELICULA</h3>
            </Col>
          </Row>
<div className='form'>


          <Form onFinish={handleSubmit}>
            <Row gutter={[10, 30]} justify="center" className="contenedor-form">
              <Col span={24}>
                <File
                setFile={setFile}
                  namebtn={!screens.lg?"Agregar un archivo":"Agregá un archivo o arrastralo y soltalo aquí"}
                  icon={<GiPaperClip className="btn-icon" />}
                />
              </Col>

              <Col>
                <Form.Item
                  className="contenedor-titulo"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese un titulo",
                    },
                  ]}
                >
                  <Input
                    className="titulo"
                    type="text"
                    placeholder="TíTULO"
                    bordered={false}
                  />
                </Form.Item>

                <Form.Item className="botones">
                  <Col span={24} className="contenedor-subir">
                    <Button className="subir" htmlType="submit">
                      SUBIR PELICULA
                    </Button>
                  </Col>

                  <Col span={24} className="contenedor-salir">
                    <Button className="salir" onClick={() => navigate('/')}>SALIR </Button>
                  </Col>
                </Form.Item>
              </Col>
            </Row>
          </Form></div>
          </>

      )}    

          </div>
      
    </>
        

  );
};
