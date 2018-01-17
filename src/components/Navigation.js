import React, { Component } from 'react';
import wolf from '../images/wolf.png';

class Navigation extends Component {
  render() {
    return (
      <div class="header-container">
        <nav class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src={wolf} className="App-logo" alt="stark" />
            GAME OF THRONES
          </a>
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Characters</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Episodes</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">World</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
              <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;