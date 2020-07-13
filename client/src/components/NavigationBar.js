import React,{useState} from 'react';
import '../styles/Navbar.scss';
import {Link} from 'react-router-dom';


export default function NavigationBar(){

          const[isOpen,setIsOpen]=useState(false);

          function handleClick(){
                    setIsOpen(!isOpen)
          }

          return(
                    <div>
                              <nav className="Nav">
                                        <div className="head">
                                                  <Link to = "/"><h1 id="headline">drbuddhisagarlamichhane.com</h1></Link>
                                                  <div id="btn" onClick={handleClick}>
                                                            |||
                                                  </div>
                                        </div>
                                        <div className= {isOpen?"drop":"ceil"}> 
                                                  <ul id="socials1">
                                                            <li><a href="/#">Email</a></li>
                                                            <li><a href="/#">Facebook</a></li>
                                                            <li><a href="/#">Viber</a></li>
                                                  
                                                  
                                                  </ul>
                                                  <ul id="routes">
                                                            <li onClick={handleClick}><Link to="/news"> News</Link></li>
                                                            <li onClick={handleClick}><Link to="/login">Login</Link></li>
                                                  </ul>
                                                  <ul id="socials2">
                                                            <li><a href="/#">Email</a></li>
                                                            <li><a href="/#">Facebook</a></li>
                                                            <li><a href="/#">Viber</a></li>
                                                  
                                                  
                                                  </ul>
                                        </div>
                                        
                              </nav>
                    </div>
          )
}

