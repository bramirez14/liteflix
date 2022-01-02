import { useState } from "react";
import { Upload, Form, Button } from "antd";
import { Progress } from "../progress/Progress";
import "./file.css";
const initialState = {
  load: false,
  porcentage: 0,
};
let array = [
  {
    porcentage: 40,
    false: {
      title: "CARGANDO",
      loadbtn: "CANCELAR",
    },
  },
  {
    
    porcentage: 70,
    false: {
      title: "CARGANDO",
      loadbtn: "CANCELAR",
    },
  },
  {
    loadbtn: "¡LISTO!",
    title: "CARGADO",
    porcentage: 100,
    btncolor:"#64EEBC",
    false: {
      title: "¡ERROR! NO SE PUDO CARGAR LA PELICULA",
      loadbtn: "REINTENTAR",
      color: "#FF0000",
    },
  },
];
export const File = ({ namebtn, icon, setFile}) => {
  const [state, setState] = useState(initialState);
  
  const { load, loadbtn, title, color, porcentage } = state;
 
  const normFile = async (e) => {
    setFile(e);
      if (e.file.type.split("/")[1] !== "pdf") {
        for (let i = 0; i < array.length; i++) {
          setState({ ...state, load: true });
          await setTimeout(() => {
            setState({
              ...state,
              load: true,
              loadbtn: array[i].loadbtn,
              porcentage: array[i].porcentage,
              title: array[i].title,
              btncolor:array[i].btncolor,
            });
          }, 2000 * i);
        }} else {
        for (let i = 0; i < array.length; i++) {
          setState({ ...state, load: true });
          await setTimeout(() => {
            setState({
              ...state,
              load: true,
              loadbtn: array[i].false.loadbtn,
              porcentage: array[i].porcentage,
              title: array[i].false.title,
              color: array[i].false.color,
            });
          }, 2000 * i);
        }
      }
    
  };
  return (
    <>
      {load ? <Progress
          porcentage={porcentage}
          button={loadbtn}
          title={title}
          bg={color}
          btncolor={state.btncolor}
        /> : (
        <Form.Item
        name='file' 
          valuePropName="fileList"
          getValueFromEvent={normFile}
        className="upload-list-inline"

        >
          <Upload name='file'  maxCount={1} beforeUpload={true}>
            <Button className="file" icon={icon}>
              
              {namebtn}
            </Button>
          </Upload>
        </Form.Item>
      )  }
    </>
  );
};
