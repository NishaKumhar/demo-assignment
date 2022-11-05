import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import { CIcon } from '@coreui/icons-react';

function App() {
  return (
    <>
      <div className='row'>
        <div className=' col-lg-2 col-md-4 col-sm-6 col-12'>
          <Sidebar />
          
        </div>
        <div className='col-lg-10 col-md-4 col-sm-6 col-12'>
          <Content/>
        </div>
      </div>
    </>
  );
}

export default App;
