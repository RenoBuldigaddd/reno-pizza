import * as React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import BaseAvatar from "../../assets/img/BaseAvatar.svg";
import "./Cabinet.scss";

class Profile extends React.PureComponent {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <div class="container-fluid padding">
            <div class="row profile jumbotron">
              <div class="col-md-3">
                <div class="profile-sidebar">
                  <div class="profile-userpic">
                    <img src={BaseAvatar} class="img-responsive" alt=""></img>
                  </div>

                  <div class="profile-usertitle">
                    <div class="profile-usertitle-name">Max Dupich</div>
                    <div class="profile-usertitle-job">Inital Developer</div>
                  </div>

                  <div class="profile-userbuttons">
                    <button type="button" class="btn btn-success btn-sm">
                      Follow
                    </button>
                    <button type="button" class="btn btn-danger btn-sm">
                      Message
                    </button>
                  </div>

                  <div class="profile-usermenu">
                    <ul class="nav">
                      <li class="active">
                        <a href="#">
                          <i class="glyphicon glyphicon-home"></i>
                          Overview{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="glyphicon glyphicon-user"></i>
                          Account Settings{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="glyphicon glyphicon-ok"></i>
                          Tasks{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="glyphicon glyphicon-flag"></i>
                          Help{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div class="profile-content">
                  Some user related content goes here...
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h1>it's Cabinet</h1>
                            <h3>Вітаємо, -клієнт-</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-9">
                            <div className='col text-center'>
                                <h4>Cart</h4>
                            </div>
                            <div className='col text-center'>
                                <h4>PreOrders</h4>
                            </div>
                        </div>
                        <div className="col col-md-3">
                            <div className="col text-center">
                                <h4>news</h4>
                            </div>
                            <div className="col text-center">
                                <h4>random</h4>
                            </div>
                        </div>
                    </div> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default connect()(Profile);
