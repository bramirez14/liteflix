import React from 'react'
import { Original } from '../original/Original'
import { Row, Menu, Dropdown } from "antd";
import {
  CheckOutlined,
    DownOutlined,
  } from "@ant-design/icons";
  import './drop.css'
export const Drop = () => {
    const menu = (
        <Menu className='menu'>
           <Menu.ItemGroup title={<h3 className='title-menu'>POPULARES <CheckOutlined style={{marginLeft:210}} /></h3> }> </Menu.ItemGroup>
          <Menu.Item className='item'>
            <a target="_blank" rel="noopener noreferrer" >
              MIS PELICULAS
            </a>
          </Menu.Item>
          
        </Menu>
      );
    return (
             
        <Dropdown className='container-drop' overlay={menu} >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <span className='ver'>VER: </span>  <span className='populares'>POPULARES <DownOutlined style={{fontSize:14}} /></span> 
        </a>
      </Dropdown>
    )
}
