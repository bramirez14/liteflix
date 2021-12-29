import { useState } from "react";
import { Upload, Form, Button } from "antd";
import { Progress } from "../progress/Progress";
import "./file.css";
const initialState = {
  load: false,
  porcentage: 0,
};

export const File = ({ name, icon }) => {
  const [state, setState] = useState(initialState);
  const { load, loadbtn, title, color, porcentage } = state;
  const normFile = (e) => {
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
    if (e.file.type.split("/")[1] === "png") {
      for (let i = 0; i < array.length; i++) {
        setState({ ...state, load: true });
        setTimeout(() => {
          setState({
            ...state,
            load: true,
            loadbtn: array[i].loadbtn,
            porcentage: array[i].porcentage,
            title: array[i].title,
            btncolor:array[i].btncolor,
          });
        }, 2000 * i);
      }

      if (Array.isArray(e)) {
        return e;
      }

      return e && e.fileList;
    } else {
      for (let i = 0; i < array.length; i++) {
        setState({ ...state, load: true });
        setTimeout(() => {
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
  console.log(state);
  return (
    <>
      {load ? (
        <Progress
          porcentage={porcentage}
          button={loadbtn}
          title={title}
          bg={color}
          btncolor={state.btncolor}
        />
      ) : (
        <Form.Item
          name="file"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="file" maxCount={1} beforeUpload={true}>
            <Button className="file" icon={icon}>
              
              {name}
            </Button>
          </Upload>
        </Form.Item>
      )}
    </>
  );
};
