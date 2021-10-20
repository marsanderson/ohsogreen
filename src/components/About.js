import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return(

    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              // className="img-fluid rounded mb-4 mb-lg-0"
              className="img-fluid rounded ml-5 w-75 p-1"
              //replace this with Kita's pic
              src="img/profile.jpeg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="col-10 mx-auto text-center text-title">A Little Something About Kita!</h1>
            <p className="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius facilisis quam 
            id luctus. Proin eu metus at orci consectetur porta eget nec felis. Praesent turpis 
            ex, iaculis sed egestas quis, rhoncus in diam. Quisque ac justo quis lorem vulputate 
            ricies. Praesent imperdiet, est eget rutrum pulvinar, felis ligula facilisis eros, 
            sed bibendum augue lacus ac odio. Ut nisi enim, viverra non interdum eget, lacinia 
            in lorem. Phasellus lorem nibh, molestie nec imperdiet ac, consequat id arcu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
}