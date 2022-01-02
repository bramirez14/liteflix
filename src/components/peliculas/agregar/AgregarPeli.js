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
  return (
    <>
      {exito ? (
        <Agregadas />
      ) : (
        
        <div className='container'>
              <div className='icon-x' onClick={() => navigate('/')}> <CloseOutlined /> </div>
          <Row className='navbar-agregar'  gutter={30}>
            <Col xs={4} sm={4} md={4} lg={6} xl={6}>
            </Col>
            <Col xs={16} sm={16} md={16} lg={12} xl={12}>
            <Logo />
            </Col>
            <Col xs={4} sm={4} md={4} lg={6} xl={12}>
            <Usuario />
            </Col>

          </Row>

          <Row justify="center" className="contenedor-agregar">
            <Col span={24}>
              <h3 className="agregar">AGREGAR PELICULA</h3>
            </Col>
          </Row>

          <Form onFinish={handleSubmit}>
            <Row gutter={[10, 30]} justify="center" className="contenedor-form">
              <Col span={24}>
                <File
                setFile={setFile}
                  namebtn={!screens.md?"Agregar un archivo":"Agregá un archivo o arrastralo y soltalo aquí"}
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
                    <Button className="salir">SALIR </Button>
                  </Col>
                </Form.Item>
              </Col>
            </Row>
          </Form>

          </div>
      )}
    </>
        

  );
};
