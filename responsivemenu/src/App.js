
import { useState } from 'react';
import './App.css';

function App() {
const [ModalStatus,setModal]=useState(false)

  return (
    <div className="container ">
     <div className='row'>
     <div className='col-12'>
     <button className='text-white text-bg-success border-0 position-fixed Btn' onClick={()=>setModal(true)}>Enquiry Now</button>
     <div className={`MOdal ${ModalStatus?'d-block':'d-none'}`} >
     <h1>Enquiry Now <span className='text-primary pointer-event cross' onClick={()=>setModal(false)}>&times;</span></h1>
     <form className='form-control bg-transparent border-0'>
        Enter Your Name:<input type='text'/>
        <br/>
        Write Your Query:<input type='text'/>
        <br/>
        <button type='submit' onClick={(event)=>event.preventDefault()} className='btn-group m-3'> Submit</button>
        <button type='submit' onClick={(event)=>event.preventDefault()} className='btn-group m-3'> Enquiry</button>
     </form>
     </div>
     </div>
    </div>
    </div>
  );
}

export default App;
