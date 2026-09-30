import { Link } from "react-router-dom";
import './navbar.css';
import twoKlogo from '../assets/images/2k14-logo.png';





          const Navbar = () => {
            
                  return (
                    <nav className="navbar">
                      <div className="nav-container">

                        <div className="logo">
                          <img src={twoKlogo} alt="logo" />
                          <h2>
                            2K14<span>MODS</span>
                          </h2>
                        </div>

                            <ul className="nav-menu">
                                <li>
                                  <Link to="/">HOME</Link>
                                </li>

                                <li className="dropdown">
                                  <Link to="/downloads">NBA 2K14 ▾</Link>

                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link to="/downloads">Downloads</Link>
                                    </li>

                                    <li>
                                      <Link to="/cyberface">Cyberface</Link>
                                    </li>

                                    <li>
                                      <Link to="/roster">Roster</Link>
                                    </li>

                                  </ul>
                                  
                                </li>

                                <li>
                                  <Link to="/tutorials">TUTORIALS & GUIDES</Link>
                                </li>

                                <li>
                                  <Link to="/community">COMMUNITY</Link>
                                </li>

                                <li>
                                  <Link to="/about">ABOUT</Link>
                                </li>
                              </ul>
          
                            </div>
                      </nav>
                  );
                };

export default Navbar;