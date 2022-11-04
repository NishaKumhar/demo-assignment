import React from 'react';
import { CAvatar } from '@coreui/react';
import BarChart from './chart/BarChart';
import LineChart from './chart/LineChart';
import CircularPieChart from './chart/CircularPieChart';
import Circularchart from './Circularchart';




const Content = () => {
    return (
        <>
            <div className='main-view bg-grey'>
                <div className='header-section'>
                    <div>
                        <h4>Dashboard</h4>
                    </div>
                    <div className=''>
                        <img src='./images/search.png' width="20px" alt='logo' className='logo-icon' />
                        <img src='./images/united-states.png' width="20px" alt='logo' className='logo-icon' />
                        <img src='./images/icon2.png' width="15px" alt='logo' className='logo-icon' />
                        <img src='./images/notification.png' width="15px" alt='logo' className='logo-icon' />
                        <img src='./images/setting.png' width="15px" alt='logo' className='logo-icon' />
                        <CAvatar src="/images/avtar.png" width="10px" />
                    </div>
                </div>
                <div className='row top' >
                    <div className='col-lg-9  '>
                        <div className=' d-flex mt-3'>
                            <div className='revenue card  col-lg-4  rounded-4'>
                                <div className='card-body p-2 d-flex align-items-center'>
                                    <img src="./images/revenue.jpg" alt="logo" width="50px" />
                                    <div>
                                        <h6>Revenue</h6>
                                        <h4>$21,456</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='revenue  card col-lg-4  rounded-4'>
                                <div className='card-body p-2 d-flex align-items-center'>
                                    <img src="./images/revenue.jpg" alt="logo" width="50px" />
                                    <div>
                                        <h6>Orders</h6>
                                        <h4>$21,456</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='revenue  card col-lg-4  rounded-4'>
                                <div className='card-body p-2 d-flex align-items-center'>
                                    <img src="./images/revenue.jpg" alt="logo" width="50px" />
                                    <div>
                                        <h6>Customers</h6>
                                        <h4>$21,456</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* middle section  */}
                        <div className=' middle  card rounded-4 mt-3'>
                            <div className='card-body gap-3'>
                                <div className='d-flex justify-content-between'>
                                    <h6>Overview</h6>
                                    <h6>Sort by: <span>Yearly</span></h6>
                                </div>
                                <div className='row'>
                                    <div className=' d-flex justify-content-between col-lg-3'>
                                        <div>
                                            <h6><span>This month</span></h6>
                                            <h4>$24,568</h4>
                                        </div>
                                        <div>
                                            <h6>40k</h6>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-3 d-flex justify-content-between p-3'>
                                            <div>
                                                <div>
                                                    <h6>Orders</h6>
                                                    <h5>5643</h5>
                                                </div>
                                                <div>
                                                    <h6>Order Value</h6>
                                                    <h5>12.03%</h5>
                                                </div>
                                                <div>
                                                    <h6>Income</h6>
                                                    <h5>$35,652</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h6>Sales</h6>
                                                    <h5>16,273</h5>
                                                </div>
                                                <div>
                                                    <h6>Customers</h6>
                                                    <h5>21,456</h5>
                                                </div>
                                                <div>
                                                    <h6>Expenses</h6>
                                                    <h5>$12,248</h5>
                                                </div>
                                            </div>
                                            {/* <div className='d-flex justify-content-between '>
                                                <div>
                                                    <h6>Orders</h6>
                                                    <h5 className='fs-6'>5,643</h5>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <h6>Sales</h6>
                                                        <h5 className='fs-6'>16,273</h5>
                                                    </div>
                                                    <div className='rate'>
                                                        <h6>30k</h6>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className='d-flex justify-content-between '>
                                                <div>
                                                    <h6>Order Value</h6>
                                                    <h5 className='fs-6'>5,643</h5>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <h6>Customers</h6>
                                                        <h5 className='fs-6'>16,273</h5>
                                                    </div>
                                                    <div className='rate'>
                                                        <h6>20k</h6>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className='d-flex justify-content-between '>
                                                <div>
                                                    <h6>Income</h6>
                                                    <h5 className='fs-6'>5,643</h5>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <h6>Expenses</h6>
                                                        <h5 className='fs-6'>16,273</h5>
                                                    </div>
                                                    <div className='rate'>
                                                        <h6>10k</h6>
                                                    </div>
                                                </div>
                                            </div> */}


                                        </div>
                                        <div className='col-lg-9'>
                                            <BarChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* bottom section */}
                        <div className=''>
                            <div className=' bottom d-flex  mt-3'>
                                <div className=' card col-lg-4 p-3  rounded-4'>
                                    <div className='d-flex justify-content-between'>
                                        <h5>User Activity</h5>
                                        <div className='d-flex align-items-center gap-1'>
                                            <h6>Weekly</h6>
                                            <img src='./images/arrow.png' alt='icon' width="13px" className='mb-2' />
                                        </div>
                                    </div>
                                    <h6><span>This month</span></h6>
                                    <h4>16,543</h4>
                                    <LineChart />
                                </div>
                                <div className=' card col-lg-4 p-3  rounded-4'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Order status</h5>
                                        <img src='./images/dots.png' alt='icon' width="15px" className='mb-2' />
                                    </div>
                                    <CircularPieChart />
                                    <hr />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h6><span>Completed</span></h6>
                                        <h6><span>Pending</span></h6>
                                        <h6><span>Cencel</span></h6>
                                    </div>
                                </div>
                                <div className=' card col-lg-4 p-3  rounded-4'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Top Product</h5>
                                        <div className='d-flex align-items-center gap-1'>
                                            <h6>Monthly</h6>
                                            <img src='./images/arrow.png' alt='icon' width="13px" className='mb-2' />
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Polo blue T-shirt</p>
                                                <p className='text-dark fw-bold'>$25.4</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>3.82k </h6>
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Hoodies for men</p>
                                                <p className='text-dark fw-bold'>$24.5</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>3.14k </h6>
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Red colour cap</p>
                                                <p className='text-dark fw-bold'>$22.5</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>2.84k </h6>
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Polo blue T-shirt</p>
                                                <p className='text-dark fw-bold'>$25.4</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>3.82k </h6>
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Polo blue T-shirt</p>
                                                <p className='text-dark fw-bold'>$25.4</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>3.82k </h6>
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Polo blue T-shirt</p>
                                                <p className='text-dark fw-bold'>$25.4</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>3.82k </h6>
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Polo blue T-shirt</p>
                                                <p className='text-dark fw-bold'>$25.4</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>3.82k </h6>
                                        </div>
                                    </div>
                                    <div className=' last mt-4 d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='border-2 bg-darkblue text-light p-1.5 rounded-3'>#1 </h6>
                                            </div>
                                            <div>
                                                <p>Polo blue T-shirt</p>
                                                <p className='text-dark fw-bold'>$25.4</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className='border-2 bg-blue text-dark'>3.82k </h6>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>




                    {/*right side section */}
                    <div className='col-lg-3 col-md-6 col-sm-6 cl-12'>
                        <div className='card rounded-4 m-3 '>
                            <div >
                                <img src="https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg" width={'100%'} alt="logo" />
                            </div>
                            <div className='card-body'>
                                <div className='text-center'>
                                    <img src="./images/avtar.png" alt="logo" width="60px" className='rounded-5 mb-6 profileImg' />
                                    <h5 className='mt-4'>Jennifer bennett</h5>
                                    <span>product designer</span>
                                </div>
                                <Circularchart/>
                                <div className='d-flex justify-content-between m-5'>
                                    <div>
                                        <h5 className='fs-6'>1269</h5>
                                        <h6>Products</h6>
                                    </div>
                                    <hr className='' />
                                    <div>
                                        <h5 className='fs-6'>5.2k</h5>
                                        <h6>Followers</h6>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h6>Earning</h6>
                                    </div>
                                    <div>
                                        <img src="./images/information.png" alt="logo" width="15px" />
                                    </div>
                                </div>
                                <div className='text-center mt-3'>
                                    <h5>$26,256</h5>
                                    <p>Earning this month</p>
                                    <p>From previous period</p>
                                </div>
                                <hr />
                                <div>
                                    <h6>Recent Activity</h6>
                                </div>
                                <div className=' last d-flex mt-4'>
                                    <div>
                                        <h6 className='border-2 bg-blue text-dark'>12 Sep </h6>
                                    </div>
                                    <div>
                                        <p>Responded to need "Volunteer Activities"</p>
                                    </div>
                                </div>
                                <div className=' last d-flex'>
                                    <div>
                                        <h6 className='border-2 bg-blue text-dark'>11 Sep </h6>
                                    </div>
                                    <div>
                                        <p>Everyone realizes would be desirable..</p>
                                    </div>
                                </div>
                                <div className=' last d-flex'>
                                    <div>
                                        <h6 className='border-2 bg-blue text-dark'>10 Sep </h6>
                                    </div>
                                    <div>
                                        <p>Joined the group"Boardsmanship Forum"</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Content;