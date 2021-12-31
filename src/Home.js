import "./home.css";
import { Navbar } from "./components/navbar/Navbar";
import "antd/dist/antd.css";
import { Original } from "./components/original/Original";
import { Title } from "./components/tittle/Title";
import { Row, Col, Button, Dropdown } from "antd";
import {
  CaretRightOutlined,
  PlusOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Movie } from "./components/peliculas/Movie";
import pelicula1 from "./components/peliculas/pelicula1.png";
import pelicula2 from "./components/peliculas/pelicula2.png";
import pelicula3 from "./components/peliculas/pelicula3.png";
import pelicula4 from "./components/peliculas/pelicula4.png";
import { Drop } from "./components/dropdown/Drop";

export const Home = () => {
  // titulo casa de papel mejora el alto
  // subtitulos achicarlos
  return (
    <>
    <div className="container-home">
        <Navbar />

        <Original name1="ORIGNILA DE" name2= "LITEFLIX" top={214} />

        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Title />
          </Col>
        </Row>
        <Row gutter={[10, 15]} justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Button className="play" type="text">
              <CaretRightOutlined /> REPRODUCIR
            </Button>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Button className='list'>
              <PlusOutlined /> MI LISTA
            </Button>
          </Col>
        </Row>
        </div>
        
        <div className="look" />
<Row><Col>
<div style={{marginTop:107,marginLeft:100}}>
  <Drop/>
</div>


</Col></Row>
        
    <div className="container-movies">

        {/* /**Peliculas */}
        <Row gutter={[10,25]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Movie movie={pelicula1} namemovie='House of Cards'/>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Movie movie={pelicula2} namemovie='THE CROWN'/>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Movie movie={pelicula3} namemovie='STRANGER THINGS'/>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Movie movie={pelicula4} namemovie='MARSEILLE'/>
          </Col>
        </Row>
      </div>
      </>
  );
};
