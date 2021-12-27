import { Row, Col, Card, Image } from 'antd'
import pelicula1 from './pelicula1.png'
import './peliculas.css'
export const Peliculas = () => {
    return (
        <Row gutter={[10,20]} style={{marginTop:20}}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
          <Card style={{ width: 350 }}>
           
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Image
                className='card'
            width={327}
            height={190}
            src={pelicula1}
            />
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
          <Card style={{ width: 350 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
          <Card style={{ width: 350 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    )
}
