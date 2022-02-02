import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'

class Navbar extends Component {

  render() {
    return (
      <nav style={{background:'#202225'}} className="navbar fixed-top flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://farhanibnesaif.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <h2>PIXELO <i class="fas fa-camera"></i></h2>
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account"></small>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                width='40'
                height='40'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;