import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TeamGrid from './team_grid';
import TeamDetails from './team_details';
import FavouriteTeams from './favourite_teams';

class TeamsParser extends Component {
  constructor(props){
    super(props);

    this.state = {
      teams: props.teams,
      favouriteTeams: [],
      selectedTeam: null,
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState(
      { width: window.innerWidth }
    );
  };


  likeTeam = (props) => {
    const teamAux = this.state.teams;
    let favTeams = this.state.favouriteTeams;

    let myTeam = teamAux.filter(team => {
      return team.code === props;
    })[0];

    const newTeams = teamAux.map(team => {
      if(team.code === props){
        team.favourite = (team.favourite === false) ?  true : false;
      }
      return team;
    })
    let isFavourite = this.state.favouriteTeams.map(team => {
      return team.code;
    }).indexOf(props);
    if(isFavourite === -1 )
      favTeams = favTeams.concat(myTeam);
    else {
      favTeams = favTeams.filter(team => {
        return team.code !== props;
      })
    }

    this.setState({
      teams: newTeams,
      favouriteTeams: favTeams
    });
  };

  selectTeam = (props) => {
    if(this.state.selectedTeam && this.state.selectedTeam.code === props)
    {
      this.setState({
        selectedTeam: null
      });
      return;
    }
    this.setState({
      selectedTeam: this.state.teams.filter(team => {
        return team.code === props;
      })[0]
    });
    if(!(this.state.width < 768))
    window.scrollTo(0, 0);
  };

  unselectTeam = () => {
    this.setState({
      selectedTeam: null
    });
  }
  render() {
    const { width } = this.state;
    const isMobile = width < 768;
    return (
      <div>

      {isMobile !== true &&
        <TeamDetails team={this.state.selectedTeam}
        unselectTeam={this.unselectTeam}/>
      }
      <div id="main">
      <div className="row">
      <FavouriteTeams
      favouriteTeams={this.state.favouriteTeams}/>
      </div>
      <div className="row">
      { this.state.teams.map(team => <TeamGrid key={team.code} {...team}
        likeTeam={this.likeTeam}
        selectTeam={this.selectTeam}
        selectedTeam={this.state.selectedTeam}
        isMobile={isMobile}/>) }
        </div>
        </div>
        </div>
      );
    }
  };

  export default TeamsParser;
