import React from 'react';

const FavouriteTeams = (props) => {
  if(!(props.favouriteTeams.length > 0))
    return null;
  return(
    <div>
      <h3>Favourite Teams</h3>
        <ul className="favourite-teams">
          {props.favouriteTeams.map(team => <li key={team.code}> {team.name} </li>)}
        </ul>
    </div>
  );
};

export default FavouriteTeams;
