import * as React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

class Signup extends React.PureComponent {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container className="jumbotron col col-md-7">
          <form>
            <div className="form-row justify-content-center">
              <div className="text-center mb-4">
                <h3 className="display-4">Registration</h3>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-9">
                <label for="inputName">Login</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLogin"
                  placeholder="Login"
                  required
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-7">
                <label for="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="email"
                  required
                  autoFocus
                ></input>
              </div>
              <div className="form-group col-md-5">
                <label for="inputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="password"
                  required
                ></input>
              </div>
              <div className="form-group col-md-5">
                <label for="confirmPassword">ConfirmPassword</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="пароль"
                  required
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-10">
                <label for="inputStreet">Street</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputStreet"
                  placeholder="street"
                ></input>
              </div>
              <div className="form-group col-md-3">
                <label for="inputBuild">Build #</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputBuild"
                  placeholder="build #"
                ></input>
              </div>
              <div className="form-group col-md-2">
                <label for="inputApt">Flat #</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputApt"
                  placeholder="flat #"
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="city"
                ></input>
              </div>
              <div className="form-group col-md-8">
                <label for="inputState">Region</label>
                <select id="inputState" className="form-control">
                  <option selected>choose...</option>
                  <option>Kyiv`ska oblast</option>
                  <option>Odessa`ska oblast</option>
                  <option>Lviv`ska oblast</option>
                  <option>Vinnyts`ska oblast</option>
                  <option>Rivne`nska oblast</option>
                  <option>Poltav`ska oblast</option>
                  <option>...</option>
                  Lviv Vinnytsia
                </select>
              </div>
            </div>
            <div className="form-group row justify-content-center mt-4">
              <Link to="/cabinet" className="btn btn-primary col-md-4">
                Confirm
              </Link>
            </div>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default connect()(Signup);
