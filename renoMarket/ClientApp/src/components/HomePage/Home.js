import * as React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "./components/Slider";
import images from "./images";

import "./Home.scss";
import background from "../../assets/img/HomePage/background.jpg";
import background2 from "../../assets/img/HomePage/background2.jpg";
import background3 from "../../assets/img/HomePage/background3.jpg";
import desk1 from "../../assets/img/HomePage/desk.png";
import panda from "../../assets/img/HomePage/gif/panda.gif";
import unicorn from "../../assets/img/HomePage/gif/unicorn.gif";
import poo from "../../assets/img/HomePage/gif/poo.gif";
import chicken from "../../assets/img/HomePage/gif/chicken.gif";

class Home extends React.PureComponent {
  state = { isOpen: false };
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* 
                <a href="#" className="btn btn-md text-center">
                  GET STARTED
                </a>
              }

          {/* <!--- Image Slider --> */}
          <div className="container-md container-fluid padding">
            <div className="row padding">
              {/* <Slider slides={images} /> */}
            </div>
          </div>

          <div className="carousel slide" id="slides">
            <ul className="carousel-indicators">
              <li
                data-target="#slides"
                data-slide-to="0"
                className="active"></li>
              <li data-target="#slides" data-slide-to="1"></li>
              <li data-target="#slides" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={background} alt="firstSlide" />
                <img />
                <div className="carousel-caption">
                  <h1 className="display-2">Bootstrap</h1>
                  <h3>Complete Website Layout</h3>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg">
                    VIEW DEMO
                  </button>
                  <button type="button" className="btn btn-primary btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={background2} alt="secondtSlide" />
                <img />
              </div>
              <div className="carousel-item">
                <img src={background3} alt="thirdSlide" />
                <img />
              </div>
            </div>
          </div>
          {/* <!--- Jumbotron --> */}
          <div className="container-fluid">
            <div className="row jumbotron">
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <p className="leed">
                  ssdsdsdasdasd asfadsgfknascoklnas skd aoksd mnkams smd kmkoams
                  dklmas Web.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                <a href="#">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg">
                    Web Hosting
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <!--- Welcome Section --> */}
          <div className="container-fluid padding">
            <div className="row welcome text-center">
              <div className="col-12">
                <h1 className="display-4">Build with ease.</h1>
              </div>
              <hr />
              <div className="col-12">
                <p className="lead">
                  Welcome to my adaptive site on bootstrap!
                </p>
              </div>
            </div>
          </div>
          {/* <!--- Three Column Section --> */}
          <div className="container-fluid padding">
            <div className="row text-center padding">
              <div className="col-xs12 col-sm-6 col-md-4">
                <i className="fas fa-code"></i>
                <h3>HTML5</h3>
                <p>Build with the latest version of HTML, HTML 5.</p>
              </div>
              <div className="col-xs12 col-sm-6 col-md-4">
                <i className="fas fa-bold"></i>
                <h3>BOOTSTRAP</h3>
                <p>Build with the latest version of Bootstrap, Bootstrap 4.</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <i className="fab fa-css3"></i>
                <h3>CSS</h3>
                <p>Build with the latest version of CSS, CSS 3.</p>
              </div>
            </div>
            <hr className="my-4" />
          </div>
          {/* <!--- Two Column Section --> */}
          <div className="container-fluid padding">
            <div className="row padding">
              <div className="col-md-12 col-lg-6">
                <h2 className="">If you biuld it</h2>
                <p>
                  The collums will automatically stack on top of each other when
                  screen is less than 576px wide.
                </p>
                <p>SMTN Shit</p>
                <p>Pro developer</p>
                <br />
                <a href="#" className="btn btn-primary">
                  {" "}
                  Learn more
                </a>
              </div>
              <div className="col-lg-6">
                <img src={desk1} alt="desk" className="img-fluid" />
              </div>
            </div>
          </div>
          <hr className="my-4" />
          {/* <!--- Fixed background --> */}
          <figure>
            <div className="fixed-wrap">
              <div className="" id="fixed"></div>
            </div>
          </figure>
          {/* <!--- Emoji Section --> */}
          <button className="fun" data-toggle="collapse" data-target="#emoji">
            click for fun
          </button>
          <div className="collapse" id="emoji">
            <div className="container-fluid padding">
              <div className="row text-center">
                <div className="col-sm-6 col-md-3">
                  <img src={panda} className="gif" alt="" />
                  <img />
                </div>
                <div className="col-sm-6 col-md-3">
                  <img src={chicken} className="gif" alt="" />
                  <img />
                </div>
                <div className="col-sm-6 col-md-3">
                  <img src={poo} className="gif" alt="" />
                  <img />
                </div>
                <div className="col-sm-6 col-md-3">
                  <img src={unicorn} className="gif" alt="" />
                  <img />
                </div>
              </div>
            </div>
          </div>
          {/* <!--- Meet the team --> */}
          <div className="container-fluid padding">
            <div className="row text-center">
              <div className="col-12">
                <h1 className="display-4">Meat the Team</h1>
              </div>
              <hr />
            </div>
          </div>
          {/* <!--- Cards --> */}
          <div className="container-fluid padding">
            <div className="row padding">
              <div className="col-md-4">
                <div className="card">
                  <img src="img/team1.png" className="card-img-top" alt="" />
                  <img />
                  <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">John is an Internet dodik</p>
                    <a href="#" className="btn btn-outline-secondary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img src="img/team2.png" className="card-img-top" alt="" />
                  <img />
                  <div className="card-body">
                    <h4 className="card-title">Melania Trump</h4>
                    <p className="card-text">First lady dick</p>
                    <a href="#" className="btn btn-outline-secondary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img src="img/team3.png" className="card-img-top" alt="" />
                  <img />
                  <div className="card-body">
                    <h4 className="card-title">Roby Dilson</h4>
                    <p className="card-text">
                      Roby is the second an Internet dodik
                    </p>
                    <a href="#" className="btn btn-outline-secondary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--- Two Column Section --> */}
          <div className="container-fluid padding">
            <div className="row padding">
              <div className="col-md-12 col-lg-6">
                <h2 className="">Our Philosopy</h2>
                <p>
                  sdaspldmadmklsaolsmcpla,csasdklmasdkmasdklmcklm aksmdkapsmdpms
                  plmasdlmap;lsdm pla;smd plkmasd map;lsdm
                </p>
                <p>SMTN Shit</p>
              </div>
              <div className="col-lg-6">
                <img
                  src="img/bootstrap2.png"
                  alt="desk"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* <!--- Connect --> */}
          <div className="container-fluid padding">
            <div className="row text-center padding">
              <div className="col-12">
                <h2>Connect</h2>
              </div>
              <div className="col-12 social padding">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="kartoplyk@gmail.com">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="https://www.instagram.com/j.kra_v/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!--- Footer --> */}

          <div className="container-fluid padding">
            <div className="row text-center jumbotron">
              <div className="col-md-4">
                <img src="img/w3newbie.png" className="" alt="" />
                <hr className="light" />

                <p>(38)063 370 4492</p>
                <p>kartoplyk@gmail.com</p>
                <p>Kostushka, 40</p>
                <p>Rivne, Rivnenska Oblast, 00000</p>
              </div>
              <div className="col-md-4">
                <hr className="light" />
                <h5>Our hours</h5>
                <hr className="light" />
                <p>Monday: 9am - 5pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: closed</p>
              </div>
              <div className="col-md-4">
                <hr className="light" />
                <h5>Service area</h5>
                <hr className="light" />

                <p>City, State, 00000</p>
                <p>City, State, 00000</p>
                <p>City, State, 00000</p>
                <p>City, State, 00000</p>
              </div>
              <div className="col-12">
                <hr className="light" />

                <h5>&copy; kartoplyk@gmail.com</h5>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default connect()(Home);
