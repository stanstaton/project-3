import React from "react";
import { Redirect } from 'react-router-dom'
import { Container } from "reactstrap";
import Signup from "./Signup";


class IndexHeader extends React.Component {
  render() {
    if (this.props.user) {
      return <Redirect to="/profile" />
  }
    let pageHeader = React.createRef();

    return (
      <>
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
        {/* </div> */}
      </>
    );
  }
}

export default IndexHeader;

