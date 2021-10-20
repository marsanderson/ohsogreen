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
            When I grew tired with what seemed like year-round sinus and congestion issues and the 
            OTC options seemed to stop working every two months, I began to do research. I found 
            natural ways that could ease not only the symptoms of sinus congestion, but other ailments 
            such as anxiety, stress, relief from headaches, nausea and even could possibly uplift the 
            mood in your home. I founded Oh So Green, to create products that uses aromatherapy, botanicals, 
            and essential oil based Room Sprays, Shower Steamers, Tinctures, and Salves. With this never-ending 
            research I then found a creative way in combining these elements. I created Oh So Green, an Online 
            Herbal Apothecary Store, to share my creations with the world. Oh So Green is committed to offering 
            the best natural and creative ways to help provide serenity for you and your home.
            </p>
            <h2 className="col-10 mx-auto text-center text-title">“……because YOUR home and YOUR vessel is 
            YOUR Sanctuary and it should always feel like the most peaceful, beautiful, and high vibrational 
            place on earth.” ~Nekita</h2>
            <h2 className="col-10 mx-auto text-center"> ~Nekita</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
}