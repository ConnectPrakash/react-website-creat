import React, { useState } from 'react';
import App from '../project/App';

function Boxone(props) {
    const [disabled, setDisabled] = useState(false);
    const name1 = "Fancy Product";
    const handleEvent = () => {
        props.first(props.second + 1);
        setDisabled(true);
        <App name={name1} />
    };

  return (
    <div>
                        <div className="col mb-5">
                          <div className="card h-100">

                              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                              <div className="card-body p-4">
                                  <div className="text-center">

                                      <h5 className="fw-bolder" value="Fancy Product">{name1}</h5>

                                      $40.00 - $80.00
                                  </div>
                              </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      
                                  <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={handleEvent}
                                      disabled={disabled}
                                  >View options</button></div>
                              </div>
                          </div>
                  </div>
                  </div>
  )
}

export default Boxone
