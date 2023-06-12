import React, { useEffect, useState } from 'react';
import ChildrenElement from '../utils/childrenElement';
import Navbar from '../components/navbar';
import SelectBar from '../components/selectbar';
import SearchBar from '../components/searchbar';
import Footers from '../components/footer';
import { Outlet } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from '../components/card';
import Sidebar from '../components/sidebar';

const EditLayout=(...arg)=>{
    const controller = ChildrenElement(arg)
    const textColor = arg.textColor || ""
    const title = arg.title || ""
    return (<>
        {
            controller.content.content
        }
        <Navbar logo="Notes Monitor" title={title}>
        </Navbar>
        <div className={`container-fluid ${textColor} `} >
            <div className='row'>
                <div className='col-sm-2 overflow-auto'>
                    <Sidebar/>
                </div>
                <div className='col-sm-10 overflow-auto' style={{height:'83vh'}}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        <Footers></Footers>
    </>)
}
export default EditLayout