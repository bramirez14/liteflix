import { Typography } from 'antd';
import './original.css'
const { Title } = Typography;
export const Original = ({name,top,icon}) => {
    return (  
            
            <h4  style={{marginTop:top}} className='subtitle'>{name} {icon}</h4>

    )
}
