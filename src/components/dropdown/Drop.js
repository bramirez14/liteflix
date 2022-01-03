import React from 'react'
import { Menu, Dropdown, List, Image  } from "antd";
import {
  CheckOutlined,
    DownOutlined,
  } from "@ant-design/icons";
  import './drop.css'
import { UnirAPI_PUBLIC_API_LOCAL } from '../../helpers/funciones';
export const Drop = () => {
  const result=UnirAPI_PUBLIC_API_LOCAL();
  console.log(result);
    const menu = (
        <Menu className='menu'>
           <Menu.ItemGroup title={<h3 className='title-menu'>POPULARES <CheckOutlined style={{marginLeft:210}} /></h3> }> </Menu.ItemGroup>
          
{result.map((a,i)=>(
 <Menu.Item className='menu-list' key={i} style={{borderBottom:'solid 1px #ffff '}}>
      <a target="_blank"  >
      <h3 className='title-movie'>{a.title}</h3> 
      <Image
         width={100}
         header={200}
         src={a.movie}/>
        </a>
         </Menu.Item>
         
))}

   

        
        </Menu>
      );
    return (
             
        <Dropdown  overlay={menu} style={{ marginTop: 107, marginLeft: 100 }}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <span className='ver'>VER: </span>  <span className='populares'>POPULARES <DownOutlined className='icon-drop' /></span> 
        </a>
      </Dropdown>
    )
}
