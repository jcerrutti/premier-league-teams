import React from 'react';

const TeamAditionalInfo = (props) => {
  return (
    <div className={props.useClass}>
       <h3>Short Name: <span className="club-name">{props.team.shortName}</span></h3>
       <h3>Squad Value: <span className="money">{props.team.squadMarketValue} </span></h3>
    </div>
  );
};

export default TeamAditionalInfo;
