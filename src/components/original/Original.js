import { Typography } from 'antd';
import './original.css'
const { Title } = Typography;
export const Original = ({name1,name2,top,icon}) => {
    return (  
            
            <h4  className='subtitle'>{name1} <span className='subtitle2'>{name2}</span> {icon}</h4>

    )
}
