import React from 'react'
import { Row, Col, Divider } from 'antd';
export const Demo = () => {
  return (
    <>
    <Divider orientation="left">Normal</Divider>
    <Row>
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row>
      <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 3 }} lg={{ order: 4 }}>
        1 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        2 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        3 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
        4 col-order-responsive
      </Col>
    </Row>
    <Divider orientation="left">OFF SET</Divider>

    <Row>
      <Col span={8} style={{height:50,background:'#ffff'}}>col-8</Col>
      <Col span={8} style={{height:50,background:'#ffff'}} >
        col-8
      </Col>
      <Col span={8} style={{height:50,background:'#ffff'}} >
        col-8
      </Col>
    </Row>
    <Divider orientation="left">OFF SET</Divider>

    <Row>
      <Col span={6} offset={6} style={{height:50,background:'#ffff'}}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6} style={{height:50,background:'#ffff'}}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Divider orientation="left">OFF SET</Divider>

    <Row>
      <Col span={12} offset={6} style={{height:50,background:'#ffff'}}>
        col-12 col-offset-6
      </Col>
    </Row>


    <Divider orientation="left">posicion</Divider>
    <Row justify="center">
      <Col span={4} style={{height:50,background:'#ffff'}}>col-4</Col>
      <Col span={4} style={{height:50,background:'#ffff'}}>col-4</Col>
     

    </Row>
  </>
  )
}
