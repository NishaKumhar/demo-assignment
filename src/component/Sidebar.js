import React from 'react';
import { CNavGroup, CBadge, CNavItem, CNavTitle, CSidebar, CSidebarNav } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer, cilList } from '@coreui/icons';




const Sidebar = () => {
    return (
        <>
            <CSidebar className='sidesection'>
                <div className='d-flex align-items-center justify-content-between p-3 '>
                    <div>
                        <h6>dashboard</h6>
                    </div>
                    <div>
                        <CIcon icon={cilList} size="xl" />
                    </div>
                </div>

                <CSidebarNav>
                    <CNavTitle>MENU</CNavTitle>
                    <CNavGroup  toggler="Dashboards">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavTitle>APPLICATIONS</CNavTitle>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                        Calander
                    </CNavItem>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                        Chat
                        <CBadge color="danger ms-auto">hot</CBadge>
                    </CNavItem>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                        File Manger
                    </CNavItem>
                    <CNavGroup icon={cilSpeedometer} toggler="Ecommerce">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavGroup icon={cilSpeedometer} toggler="Email">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavGroup icon={cilSpeedometer} toggler="Invoices"> 
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavGroup icon={cilSpeedometer} toggler="Projects">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavGroup icon={cilSpeedometer} toggler="Contacts">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavTitle>Layouts</CNavTitle>
                    <CNavTitle>Pages</CNavTitle>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                        Authentication
                        <CBadge color="info ms-auto">9</CBadge>
                    </CNavItem>
                    <CNavGroup icon={cilSpeedometer} toggler="Utility">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavTitle>Component</CNavTitle>
                    <CNavGroup icon={cilSpeedometer} toggler="UI Element">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                    <CNavGroup icon={cilSpeedometer} toggler="Form">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Ecommerce
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Saas
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" /> Crypto
                        </CNavItem>
                    </CNavGroup>
                </CSidebarNav>
            </CSidebar>
            {/* <CSidebar>
                <CSidebarNav>
                    <CCreateElement
                        items={Nav}
                        components={
                            {
                                CSidebarNavDivider,
                                CSidebarNavDropdown,
                                CSidebarNavItem,
                                CSidebarNavTitle

                            }
                        }
                ></CCreateElement>
                </CSidebarNav>
            </CSidebar> */}
        </>
    );
}
export default Sidebar;