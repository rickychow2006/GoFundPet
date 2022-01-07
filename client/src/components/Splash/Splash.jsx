import React from 'react';
import './Splash.css'
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splashpage-whole-main" id="main">
        <div className="splashpage-first">
          <div className ="splashpage-first-header">
          <h1 className="splashpage-first-bigtitle">
            Animal Fundraising
          </h1>
          <p className="splashpage-first-text">
            Fundraise for vet bills, support animal welfare and rescues, and fund all your furry friend's needs on GoFundPet.
          </p>
          </div>
          <div className ="splashpage-first-illuistration">
            <div className ="img-container">
              <img src="https://imagecdn.mightycause.com/d900a6df-85c6-4ca8-83ab-b19f17f0fa12/-/format/auto/-/progressive/yes/-/stretch/off/-/quality/smart/-/resize/526x/" width="600" height="400" alt="header_picture">
              </img>
            </div>
          </div>
        </div>
        <div className="splashpage-second">
          <h1 className="splashpage-second-title">
            Fundraiser for Pets
          </h1>
        </div>
        <div>
        <h4 className="splashpage-third-text">
            For most of us, our pets are beloved family members. When your pet is sick or hurt and in need of veterinary care, you want to provide the best care possible for them. Unfortunately routine veterinary care can cost hundreds of dollars and you could be saddled with a vet bill for thousands of dollars if your pet suffers a health emergency. That’s where GoFundPet comes in.
          </h4>

        </div>
    </div>
    );
  }
}

export default Splash;