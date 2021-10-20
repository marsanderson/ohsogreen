import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return(

    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="img/foilage.jpeg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="col-10 mx-auto text-center text-title">Welcome to the</h1>
            <h1 className="col-10 mx-auto text-center text-title">Oh So Green Experience!</h1>

            <p className="h5">
            Oh So Green is a home based company that specifically caters 
            to creating products using specific Essential Oils, natural 
            preservatives, and carrier oils for Aromatherapy, Health and 
            Beauty, and effective Home Cleaning. There are so many positive 
            benefits that Essential Oils can bring to the human body and 
            space and we plan to bring those aromas to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
}
