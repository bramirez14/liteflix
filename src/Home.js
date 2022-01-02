import "./home.css";
import { Navbar } from "./components/navbar/Navbar";
import "antd/dist/antd.css";
import { Original } from "./components/original/Original";
import { Title } from "./components/tittle/Title";
import { Row, Col, Button, Grid } from "antd";
import {
  CaretRightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Movie } from "./components/peliculas/Movie";
import pelicula1 from "./components/peliculas/pelicula1.png";
import pelicula2 from "./components/peliculas/pelicula2.png";
import pelicula3 from "./components/peliculas/pelicula3.png";
import pelicula4 from "./components/peliculas/pelicula4.png";
import { Drop } from "./components/dropdown/Drop";
const { useBreakpoint } = Grid;
export const Home = () => {
 const screens = useBreakpoint();
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="container-home">
          <Navbar />

          <Original name1="ORIGNILA DE" name2="LITEFLIX" top={screens.md?470:154} />{/** mobile 154 desctock 273 */}

          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Title />
            </Col>
          </Row>

          <Row gutter={[10, 15]} >
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
              <Button className="play" type="text">
                <CaretRightOutlined /> REPRODUCIR
              </Button>
            </Col>

            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
              <Button className="list">
                <PlusOutlined /> MI LISTA
              </Button>
            </Col>
          </Row>
        </div>

        <div className="look" />
        <div className='container-dropdown'>
          <Row>
          <Col>
            <div style={{ marginTop: 107, marginLeft: 100 }}>
              <Drop />
            </div>
          </Col>
        </Row>
        </div>
        

        <div className="container-movies" >
          {/* /**Peliculas */}
          <Row gutter={[{ xs: 10, sm: 10, md: 10,lg:10}, { xs: 25, sm: 25, md: 4,lg:4}]} >
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Movie movie={pelicula1} namemovie="House of Cards" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Movie movie={pelicula2} namemovie="THE CROWN" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Movie movie={pelicula3} namemovie="STRANGER THINGS" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Movie movie={pelicula4} namemovie="MARSEILLE" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
