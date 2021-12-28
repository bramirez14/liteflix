import { useState } from "react";
import { Upload, Form, Button } from "antd";
import { Progress } from "../progress/Progress";
import "./file.css";
export const File = ({ name, icon }) => {
  const [progress, setProgress] = useState(false);
  const [porcentaje, setPorcentaje] = useState(0);
  const normFile = (e) => {
    let array=[40,70]
    console.log(e.file.type.split("/")[1]);
    if (e.file.type.split("/")[1] === "png") {
      setProgress(true);
      for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
        setPorcentaje(array[i])
      }, 5000*[i]);
      }
      
      if (Array.isArray(e)) {
        return e;
      }

      return e && e.fileList;
    }
  };
  return (
    <>
      {progress ? (
        <Progress porcentaje={porcentaje}/>
      ) : (
        <Form.Item
          name="file"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="file" maxCount={1} beforeUpload={true}>
            <Button className="file" icon={icon}>
              {" "}
              {name}{" "}
            </Button>
          </Upload>
        </Form.Item>
      )}
    </>
  );
};
