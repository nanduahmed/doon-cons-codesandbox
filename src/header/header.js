import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
const imageStyle = {};

const HeaderDetails = props => {
  // render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img
              src="https://allmetalsolutions.co.uk/wp-content/uploads/2014/08/steelfabrication-150x150.jpg"
              className="card-img-top"
              style={imageStyle}
              alt=""
            />
            <div className="card-body">
              <p className="card-text">Steel Fabrication</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.I4kri06Lx0512K47enPYmgAAAA%26pid%3DApi&f=1"
              className="card-img-top"
              alt=""
              style={imageStyle}
            />
            <div className="card-body">
              <p className="card-text">Alumnium Fabrication</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F01%2F09%2F25%2F010925b16d9da7c53921e61b897a563a--faux-painting-rag-painting-walls.jpg&f=1"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">Painting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ height: "2" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5">
                <h3 className="display1">Doon Constructions</h3>
                <p className="lead">Gulshan Ahmed</p>
                <a href="tel:+919045550888">+91 9045550888</a>
                <br />
                <a href="tel:+919760797567">+91 9760797567</a>
                <address className="lead">
                  13/9 Deep Lok Colony Ballupur Road, Dehradun
                </address>
              </div>
              <div className="col-sm-7">
                <p className="lead">
                  Provide advice & services for Heavy & Domestic steel/aluminium
                  & other material fabrication & Civil works. Civil construction
                  & painting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <HeaderDetails />
        </div>
      </div>
    );
  }
}
