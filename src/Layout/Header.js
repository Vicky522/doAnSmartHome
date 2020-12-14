import React, { Component } from "react";
import styleHeader from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm ">
          <a className="navbar-brand" href="#">
            <img
              src="http://picsum.photos/200/200"
              alt="smart-home"
              width="200"
              height="80"
            />
          </a>
          <button
            className="navbar-toggler d-lg-none text-white"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul
              className="navbar-nav mr-auto mt-2 mt-lg-0 "
              id={`${styleHeader["headerNav"]}`}
            >
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  DASH BOARD <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ITEM
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  ABOUT US
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* nav second */}
          <div className={`${styleHeader["btn-navSecond"]}`}>
            <button className={`btn mx-5 text-white `}>
              <i class="fas fa-stream"></i>
            </button>
            <div className={`${styleHeader["navSecond"]}`}>
              <button className={`btn rounded-0 text-white bg-dark w-100 p-3`}>
                <i class="fas fa-stream"></i>
              </button>
              <div className={`${styleHeader["navSecond__info"]} pt-2`}>
                <ul class={`nav justify-content-center `}>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      <i class="fab fa-facebook-messenger "></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      <i class="fa fa-map-marker-alt "></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled text-white" href="#">
                      <i class="fa fa-user"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled text-white" href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>

                <div>
                  <a class="nav-link disabled text-white" href="#">
                    <i class="fa fa-share-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
