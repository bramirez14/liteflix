import {Row, Col, Button} from 'antd';
import { Logo } from '../../navbar/Logo';
import { Usuario } from '../../navbar/Usuario';
import './agregadas.css'
export const Agregadas = () => {
    return (
        <>
         <Row gutter={30}>
            <Col xs={4} sm={4} md={4} lg={24} xl={24}>
              <div></div>
            </Col>
            <Logo/>
            <Usuario />
          </Row>
        <Row justify="center">
            <Col  xs={24} sm={24} md={24} lg={24} xl={24}> <h3 className='congratulations'>
            ¡FELICITACIONES!
        </h3></Col>
            <Col  xs={24} sm={24} md={24} lg={24} xl={24}> <p className='msg'>
        Liteflix The Movie fue correctamente subida.
        </p> </Col>
            <Col  xs={24} sm={24} md={24} lg={24} xl={24}><Button  className='back'> IR A HOME </Button>  </Col>
          
       

                  
        </Row>
        
        </>
    )
}
