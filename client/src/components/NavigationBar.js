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
                                                            <li className="soc"><a href="/#">Email</a></li>
                                                            <li className="soc"><a href="/#">Facebook</a></li>
                                                            <li className="soc"><a href="/#">Viber</a></li>
                                                  
                                                  
                                                  </ul>
                                                  <ul id="routes">
                                                            <li onClick={handleClick}><Link to="/news"> News</Link></li>
                                                          
                                                  </ul>
                                                  <ul id="socials2">
                                                            <li className="soc"><a href="/#">Email</a></li>
                                                            <li className="soc"><a href="/#">Facebook</a></li>
                                                            <li className="soc"><a href="/#">Viber</a></li>
                                                  
                                                  
                                                  </ul>
                                        </div>
                                        
                              </nav>
                    </div>
          )
}

