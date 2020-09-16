import React from 'react';

function Peg(props){
    const rowNum = props.coord[0];
    const colNum = props.coord[1];
    const offset = () => {
        if (rowNum%2){
            return `${(props.G.offSet/100)*props.G.pegSize}px`;
        }else{
            return "0px";
        }
    }

    return ( 
                <svg style={{position: "relative",
                    left: offset()}}
                    height={props.G.pegSize}
                    width={props.G.pegSize}
                    fill={props.col.color}
                    onClick={()=>{props.moves.setColor(rowNum, colNum)}}
                    >
                    <circle 
                        cx={props.G.pegSize/2}
                        cy={props.G.pegSize/2}
                        r={props.G.pegSize/2}
                        />
                </svg>
    )
}

export default Peg