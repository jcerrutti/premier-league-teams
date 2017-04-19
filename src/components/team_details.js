import React from 'react';
import TeamAditionalInfo from './team_aditional_info';

const TeamDetails = (props) => {
  const closeNav = () => {
    if(document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
  };

  if(!props.team) {
    closeNav();
    return (
      <div id="mySidenav" className={"sidenav"}></div>
  )
}
  return(
    <div id="mySidenav" className="sidenav team-sidenav">
       <i className="close-details glyphicon glyphicon-remove"
          onClick={(event) => {closeNav(event); props.unselectTeam();} }></i>
       <TeamAditionalInfo
          useClass="team-details"
          team={props.team} />
    </div>
  );
};

export default TeamDetails;
