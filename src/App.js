import React, { Component } from 'react';
import logo from './images/premier_logo.png';
import './styles/App.css';

import TeamsParser from './components/teams_parser';

class App extends Component {

  constructor(props) {
    super(props);

  }

render() {
  let data = [
        {
        "name": "Hull City FC",
        "code": "HUL",
        "shortName": "Hull",
        "squadMarketValue": "122,250,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/a9/Hull_City_AFC.svg",
        "favourite": false
        },
        {
        "name": "Leicester City FC",
        "code": "LCFC",
        "shortName": "Foxes",
        "squadMarketValue": "205,300,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
          "favourite": false
        },
        {
        "name": "Southampton FC",
        "code": "SFC",
        "shortName": "Southampton",
        "squadMarketValue": "230,500,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg",
          "favourite": false
        },
        {
        "name": "Watford FC",
        "code": "Watfordfc",
        "shortName": "Watford",
        "squadMarketValue": "127,250,000 \u20ac",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg",
          "favourite": false
        },
        {
        "name": "Middlesbrough FC",
        "code": "MiddFC",
        "shortName": "Middlesbrough",
        "squadMarketValue": "99,500,000 \u20ac",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg",
          "favourite": false
        },
        {
        "name": "Stoke City FC",
        "code": "SCFC",
        "shortName": "Stoke",
        "squadMarketValue": "168,250,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg",
          "favourite": false
        },
        {
        "name": "Everton FC",
        "code": "EFC",
        "shortName": "Everton",
        "squadMarketValue": "249,100,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg",
          "favourite": false
        },
        {
        "name": "Tottenham Hotspur FC",
        "code": "THFC",
        "shortName": "Spurs",
        "squadMarketValue": "429,000,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg",
          "favourite": false
        },
        {
        "name": "Crystal Palace FC",
        "code": "CRY",
        "shortName": "Crystal",
        "squadMarketValue": "186,500,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png",
          "favourite": false
        },
        {
        "name": "West Bromwich Albion FC",
        "code": "WBA",
        "shortName": "West Bromwich",
        "squadMarketValue": "98,600,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg",
          "favourite": false
        },
        {
        "name": "Burnley FC",
        "code": "BFC",
        "shortName": "Burnley",
        "squadMarketValue": "85,000,000 \u20ac",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png",
          "favourite": false
        },
        {
        "name": "Swansea City FC",
        "code": "SWA",
        "shortName": "Swans",
        "squadMarketValue": "127,600,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg",
          "favourite": false
        },
        {
         "name": "Manchester City FC",
        "code": "MCFC",
        "shortName": "ManCity",
        "squadMarketValue": "525,250,000 \u20ac",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          "favourite": false
        },
        {
        "name": "Sunderland AFC",
        "code": "SUN",
        "shortName": "Sunderland",
        "squadMarketValue": "102,000,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/6/60/AFC_Sunderland.svg",
          "favourite": false
        },
        {
        "name": "AFC Bournemouth",
        "code": "AFCB",
        "shortName": "Bournemouth",
        "squadMarketValue": "106,000,000 \u20ac",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg",
          "favourite": false
        },
        {
        "name": "Manchester United FC",
        "code": "MUFC",
        "shortName": "ManU",
        "squadMarketValue": "466,000,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
          "favourite": false
        },
        {
        "name": "Arsenal FC",
        "code": "AFC",
        "shortName": "Arsenal",
        "squadMarketValue": "492,500,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          "favourite": false
        },
        {
        "name": "Liverpool FC",
        "code": "LFC",
        "shortName": "Liverpool",
        "squadMarketValue": "372,200,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg",
          "favourite": false
        },
        {
        "name": "Chelsea FC",
        "code": "CFC",
        "shortName": "Chelsea",
        "squadMarketValue": "515,000,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg",
          "favourite": false
        },
        {
        "name": "West Ham United FC",
        "code": "WHU",
        "shortName": "West Ham",
        "squadMarketValue": "209,400,000 \u20ac",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg",
          "favourite": false
        }
  ];

    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container-fluid main-container">
          <TeamsParser teams={data}/>
        </div>
      </div>
    );
  }
}

export default App;
