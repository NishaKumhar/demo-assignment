import React from 'react';
import { CIcon } from '@coreui/icons-react';


const Nav = [
    {
     _tag:'CSidebarNavItems',
     name:'Dashboard',
     to:'/dashboard',
     icon:<CIcon name="cil-speedometer" customclasses="c-sidebar-nav-icon"/>,
     badge:{
        color:'info',
        text:'New'
     }
},
]
export default Nav;
