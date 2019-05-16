import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        {/* <div class="jumbotron"> */}
        <div class="container-fluid">
          <div class="col-sm-8">
            <h1 class="display-4">Doon Constructions</h1>
            <address class="lead">
              13/9 Deep Lok Colony Ballupur road, Dehradun
            </address>
          </div>
          <div class="col-sm-8">
            <p>
              Provide advice & services for Heavy & Domestic steel/aluminium &
              other material fabrication & Civil works. Civil construction &
              painting.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
