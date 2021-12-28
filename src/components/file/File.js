import { Upload, Form, Button } from 'antd';
import './file.css'
export const File =({name,icon}) =>{

    const normFile =  (e) => {
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
      };
    return (
        <Form.Item
        name="file"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
            {
              required: true,
              message: "Por favor ingrese una pelicula",
            },
          ]}
      >

        <Upload name='file'  listType="picture" maxCount={1} accept=".jpg, .jpeg, .png" 
        beforeUpload={true}
        
        >
          <Button className='file' icon={icon}> {name} </Button>
        </Upload>
      </Form.Item>
    );
  
}
