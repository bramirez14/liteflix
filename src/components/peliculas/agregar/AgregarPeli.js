import { Row, Col, Button, Form, Input, Upload } from "antd";
import { Logo } from "../../navbar/Logo";
import { Usuario } from "../../navbar/Usuario";
import { PaperClipOutlined } from "@ant-design/icons";
import { GiPaperClip } from "react-icons/gi";

import "./agregar.css";
import { File } from "../../file/File";
const { Dragger } = Upload;
export const AgregarPeli = () => {
    const normFile =  (e) => {
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
      };
  return (
    <>
      <div className="contenedor">
        <Row gutter={30}>
          <Col xs={4} sm={4} md={4} lg={24} xl={24}>
            <div></div>
          </Col>
          <Logo />
          <Usuario />
        </Row>

        <Row justify="center" className="contenedor-agregar">
          <Col span={24}>
            <h3 className="agregar">AGREGAR PELICULA</h3>
          </Col>
        </Row>
<Form>
<Row gutter={[10,30]} justify="center" className='contenedor-form' >
    
               <Col span={24}>
           <File name='Agregar un archivo' icon={<GiPaperClip className="btn-icon" />}/>

          </Col>
        

        
          <Col>
           
              <Form.Item
                className="contenedor-titulo"
                name="titulo"
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

              <Form.Item
              className='botones'
              >
                <Col span={24} className='contenedor-subir'>
                  <Button  className='subir' htmlType="submit" > SUBIR PELICULA </Button>
                </Col>

                <Col span={24} className='contenedor-salir'>
                  <Button className='salir' >SALIR </Button>
                </Col>

              </Form.Item>
              </Col>
    
          
        </Row>
</Form>
      
      </div>
    </>
  );
};
