import React from 'react';
import TeamAditionalInfo from './team_aditional_info';

const TeamGrid = (props) => {

  const clickLike = (event) => {
    event.stopPropagation();
    props.likeTeam(props.code);
  }

  const openNav = (event) => {
    if(!props.isMobile) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
  }

  const isTeamSelected = () => {
    if(!props.selectedTeam)
      return false;
    return props.selectedTeam.code === props.code ? 'selected' : '';
  }

    return (
      <div className="col-md-4 col-sm-6 team-container ">
        <div onClick={(event) => { props.selectTeam(props.code); openNav(event); }}
             className={"team "+ (isTeamSelected() ? 'selected' : '')}>
          <div className="icons-container">
            <span onClick={clickLike}
                  className={"like-icon glyphicon " + (props.favourite === true ? 'liked' : '')}></span>
          </div>
          <img className="crestImg" src={props.crestUrl} />
          <br />
          <h3 className="team-name">{props.name}</h3>
          {
            props.isMobile === true &&
            <div className={"more-info "+ (isTeamSelected() ? 'show' : '')}>
            <TeamAditionalInfo
               team={props} />
            </div>
          }
        </div>
      </div>
    );
};

export default TeamGrid;
