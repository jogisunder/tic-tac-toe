import React from 'react'

const PlayerInfo = (props) => {
    const element = props.winner ? (
      <h2>Winner: {props.winner}</h2>
    ) : (
      <h2>turn: {props.turn}</h2>
    );
    return element;
}

export default PlayerInfo
