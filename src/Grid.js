import React from 'react'
import styles from './grid.module.css';
import Circle from "./Svgs/Circle";
import Cross from "./Svgs/Cross";

const renderSVG = (svg) => {
  if (svg === "cross") {
    return <Cross />;
  } else if (svg === "circle") {
    return <Circle />;
  } else {
    return null;
  }
};

const Grid = (props) => {

    const divisions = props.positions.map((value, index) => {
        const isWinningIndex = props.winningIndexs.includes(index);
        return(
            <div 
                className = {isWinningIndex ? styles.winner : null}
                key = {index}
                onClick={() => {
                props.setpositions(index);
            }}>
                {renderSVG(value)}
            </div>
        )
    });


    return (
      <div className={styles.container}>
        {divisions}
      </div>
    );
}

export default Grid
