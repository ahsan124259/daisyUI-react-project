import React from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const routes=[
        {id:1,path:'/about',name:"About"},
        {id:2,path:'/contact',name:"Contact"},
        {id:3,path:'/service ',name:"Service"},
        {id:4,path:'/product ',name:"Product"},
        {id:5,path:'/info ',name:"Info"}
        
    ]
    return (
        <nav>
            <FaBars />
            <ul className='md:flex '>
                {routes.map(route=><li className='mr-8' key={route.id}><a href={route.path}>{route.name}</a></li>)}
            </ul>
        </nav>
    );
};

export default Navbar;