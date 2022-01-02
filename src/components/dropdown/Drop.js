import React from 'react'
import { Menu, Dropdown, List, Image  } from "antd";
import {
  CheckOutlined,
    DownOutlined,
  } from "@ant-design/icons";
  import './drop.css'
import { useGet } from '../../hook/useGet';
export const Drop = () => {
   const[state]=useGet('http://localhost:4001/api/liteflix/movies');
   const[apiliteflix]=useGet('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20');
const newLiteFlix = apiliteflix.data?.results.map(l =>( {
    title:l.original_title,
    movie:`https://image.tmdb.org/t/p/w400${l.backdrop_path}`,
}))
const newApi=(newLiteFlix!==undefined && state.data!== undefined) && [...state.data,...newLiteFlix];
console.log(newApi);
    const menu = (
        <Menu className='menu'>
           <Menu.ItemGroup title={<h3 className='title-menu'>POPULARES <CheckOutlined style={{marginLeft:210}} /></h3> }> 
     {/*      <Menu.Item  key='1'>
            <List className='menu-list'
      header={<div className='item'> MIS PELICULAS</div>}
      bordered
      dataSource={newApi}
      renderItem={item => (
        <List.Item   
        key={item.id}>
         <h3 className='title-movie'>{item.title} </h3>
         <Image
         width={100}
         header={200}
         src={item.movie}/>
  
        </List.Item>
      )}
    />
          </Menu.Item> */}
          

{newApi.map(a=>(
    <Menu.Item className='menu-list' >
      <a target="_blank"  href={a.movie}>
      <h3 className='title-movie'>{a.title} </h3>  
        </a>
    </Menu.Item>)
)}
        </Menu.ItemGroup>
        </Menu>
      );
    return (
             
        <Dropdown  overlay={menu} >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <span className='ver'>VER: </span>  <span className='populares'>POPULARES <DownOutlined className='icon-drop' /></span> 
        </a>
      </Dropdown>
    )
}
