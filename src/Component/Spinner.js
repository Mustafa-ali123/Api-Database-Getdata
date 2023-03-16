import React from 'react'
import '../App.css';

const Spinner = () => {
  return (
    <div className="container  mt-5  py-5">
      <div className="row  text-center  mt-5  py-5">
        <div className="col-lg-12 md-12 sm-12 mt-5">
          <div class="spinner-border  text-primary mt-5  " role="status">
            <span class="visually-hidden mt-5 ">Loading...</span>
          </div>
         </div>
       </div>
     </div>
  )
}

export default Spinner
