import React, { Component } from "react";
import Header from "../Layout/Header";
import styleHome from "./Home.module.css";

export default class Home extends Component {
  render() {
    return (
      <div className={styleHome.bgHome}>
        <Header />

        <main>
          {/* intro */}
          <section className={`container-fluid ${styleHome.homeIntro} mt-5`}>
            <div className={styleHome["icon-list"]}>
              <a href="#">
                <i class="fas fa-window-minimize text-white"></i>
              </a>
              <a href="#">
                <i class="fas fa-window-minimize text-white"></i>
              </a>
              <a href="#">
                <i class="fas fa-window-minimize text-white"></i>
              </a>
            </div>

            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jDaRPsvvcz4?start=6"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <div className="text-center ">
                <button className="btn text-dark border rounded-pill border-dark bg-white px-5">
                  Demo
                </button>
              </div>
            </div>

            <div className={`${styleHome["icon-next"]}`}>
              <a href="#">
                <i class="fa fa-angle-right"></i>
              </a>
              <a href="#">
                <i class="fa fa-angle-left"></i>
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
