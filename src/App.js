import React from 'react';
import {makeHappy, makeUnhappy} from './index';
import {connect} from 'react-redux';
import happy from './components/images/happy.webp';
import unHappy from './components/images/unhappy.jpg';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import './styles.scss';
const App = ({amIHappy, makeHappy, makeUnhappy}) => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        {/* <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
        
        <p className="text">
          {
            amIHappy ? <img src={happy} alt="" /> : <img src={unHappy} alt="" />
          }
        </p>
        <button className="buttom" onClick={makeHappy}>happy</button>
        <button className="buttom" onClick={makeUnhappy}><p className="text">unhappy</p></button>
      </div>
    </div>
  );
};

export default connect(
  state => state,
  {makeHappy, makeUnhappy},
)(App);
