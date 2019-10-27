/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="Fantasiya Logo"
              className="n-logo"
              src={require("assets/img/logo/fantasiya_logo.png")}
            ></img>
            <h1 className="h1-seo">Fantasiya</h1>
            <h3>The Capital City of Mythology Kingdom</h3>
            <div className="row">
              <div className="col-3">
                <img
                  alt="Fantasiya Logo"
                  className="n-logo"
                  src={require("assets/img/house-logo/house_1.png")}
                ></img>
              </div>
              <div className="col-3">
              <img
                  alt="Fantasiya Logo"
                  className="n-logo"
                  src={require("assets/img/house-logo/house_2.png")}
                ></img>
              </div>
              <div className="col-3">
              <img
                  alt="Fantasiya Logo"
                  className="n-logo"
                  src={require("assets/img/house-logo/house_3.png")}
                ></img>
              </div>
              <div className="col-3">
              <img
                  alt="Fantasiya Logo"
                  className="n-logo"
                  src={require("assets/img/house-logo/house_4.png")}
                ></img>
              </div>
            </div>
          </div>
          <h6 className="category category-absolute">
            Don't limit your challengers.Challenge your limits 
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
