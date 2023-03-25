import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="/">NewsRace</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/General">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
