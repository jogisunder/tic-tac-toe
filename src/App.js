import React, { useState } from 'react'
import Grid from "./Grid";
import PlayerInfo from './PlayerInfo'

const App = () => {
    const [data, setdata] = useState({
        winner: {
            name: undefined,
            indexes: []
        },
        turn: "cross",
        positions: new Array(9).fill(null),
    });

    console.log("prevData", data);

    return (
        <>
            <Grid
                winningIndexs={data.winner.indexes}
                positions={data.positions}
                setpositions={(index) => {
                    setdata((predata) => {
                        if (!predata.positions[index] && !predata.winner.name) {
                            const data = { ...predata };
                            data.positions[index] = data.turn;
                            const lines = [
                                [0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 4, 8],
                                [2, 4, 6],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8]
                            ]
                            lines.forEach(line => {
                                const [a, b, c] = line;
                                if (
                                    data.positions[a] &&
                                    data.positions[a] === data.positions[b] &&
                                    data.positions[a] === data.positions[c]
                                ) {
                                    data.winner.name = data.turn;
                                    data.winner.indexes = line;
                                }
                            });
                            data.turn = data.turn === "cross" ? "circle" : "cross";
                            return data;
                        } else {
                            return predata;
                        }
                    });
                }}
            />
            <PlayerInfo  winner={data.winner.name} turn={data.turn}/>
        </>
    );
}

export default App
