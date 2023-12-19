import React, { useState } from 'react'
import Header from '../component/Header';
import './App.css';
import Boxone from '../component/Boxone';
import Boxtwo from '../component/Boxtwo';
import Boxthree from '../component/Boxthree';
import Boxfour from '../component/Boxfour';
import Boxfive from '../component/Boxfive';
import Boxsix from '../component/Boxsix';
import Boxseven from '../component/Boxseven';
import Boxeight from '../component/Boxeight';


function App(props) {
    const [first, setfirst] = useState(0);
  
  
    return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container px-4 px-lg-5">
                  <a className="navbar-brand" href="#!">Start Bootstrap</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                                  <li><hr className="dropdown-divider" /></li>
                                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                              </ul>
                          </li>
                      </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit" onClick={() => { <ul><li>{props.name1}</li></ul>}}>

                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill"> {first}</span>
                            </button>
                      </form>
                  </div>
              </div>
          </nav> 
          <Header />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">     
                    <Boxone first={setfirst} second={first} />
                    <Boxtwo first={setfirst} second={first} />
                    <Boxthree first={setfirst} second={first} />
                   <Boxfour first={setfirst} second={first} />
                   <Boxfive first={setfirst} second={first} />
                   <Boxsix first={setfirst} second={first} />
                  <Boxseven first={setfirst} second={first} />
                  <Boxeight first={setfirst} second={first} />
                    </div>
                </div>
            </section>
            </div>
         
  )
}

export default App;
