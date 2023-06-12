import React, { useEffect, useState } from 'react';
import ChildrenElement from '../utils/childrenElement';
import Navbar from '../components/navbar';
import SelectBar from '../components/selectbar';
import SearchBar from '../components/searchbar';

import Footers from '../components/footer';
import { Outlet } from 'react-router-dom';

const MainLayout=(...arg)=>{
    const controller = ChildrenElement(arg)
    const textColor = arg.textColor || ""
    return (<>
        {
            controller.content.content
        }
        <Navbar logo="Notes Monitor" title="">
            <SelectBar values={["Server1","Server2"]}/>
        </Navbar>
        
        <div className={`container-fluid ${textColor} overflow-auto p-5`}  style={{height:'81vh'} }>
            <div className='row'>
                <Outlet></Outlet>
            </div>
        </div>
        
        <Footers></Footers>
    </>)
}
export default MainLayout