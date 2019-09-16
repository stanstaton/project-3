// import React from 'react'


// const Home = props => {
//     return (
        
//         <h1>Home Page</h1>

//     )
// }

// export default Home

/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Signup from "./Signup";
import SignUp from "./SignUp";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  //THIS IS JUST FOR SCROLLING EFFECTS 
//   React.useEffect(() => {
//     if (window.innerWidth > 991) {
//       const updateScroll = () => {
//         let windowScrollTop = window.pageYOffset / 3;
//         pageHeader.current.style.transform =
//           "translate3d(0," + windowScrollTop + "px,0)";
//       };
//       window.addEventListener("scroll", updateScroll);
//       return function cleanup() {
//         window.removeEventListener("scroll", updateScroll);
//       };
//     }
//   });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/seattle.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("../assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">SEABNB</h1>
            <h3>Seattle Air-BNBetter</h3>
            {/* <SignUp /> */}
            <Signup />
           
          </div>
          <h6 className="category category-absolute">
 
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;

