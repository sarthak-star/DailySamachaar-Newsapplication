import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg " style={{backgroundColor:'#674188'}}>
      <div className="container-fluid" >
        <Link className="navbar-brand"  style={{color:'#F7EFE5'}} to="/">DailySamachaar</Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-item" aria-current="page" to="/" style={{ margin: '0px 15px', textDecoration: 'none', color: '#F7EFE5' }}>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link style={{ textDecoration: 'none', color: '#F7EFE5' }} className="nav-item dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/General">General</Link></li>
                <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                <li><Link className="dropdown-item" to="/Business">Business</Link></li>
                <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
