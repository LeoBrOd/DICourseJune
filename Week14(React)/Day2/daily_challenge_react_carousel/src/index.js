import React, {Component} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import reportWebVitals from "./reportWebVitals";

class DemoCarousel extends Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
                  <p className="legend">Hong Kong</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
                  <p className="legend">Macao</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
                  <p className="legend">Japan</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
                  <p className="legend">Las Vegas</p>
              </div>
          </Carousel>
      );
  }
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<DemoCarousel />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


