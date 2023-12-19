import React, { useState } from 'react'

function Boxeight(props) {
    const [disabled, setDisabled] = useState(false);
    const handleEvent = () => {
        props.first(props.second + 1);
        setDisabled(true);
    };

  return (
    <div>
          <div className="col mb-5">
              <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/*    */}
                  <div className="card-body p-4">
                      <div className="text-center">
                          {/*    */}
                          <h5 className="fw-bolder">Popular Item</h5>
                          {/*     */}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                          </div>
                          {/*   */}
                          $40.00
                      </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={handleEvent}
                          disabled={disabled}>Add to cart</button></div>
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default Boxeight
