import React, { useEffect } from 'react';
import Peg from './Peg'
import Options from './Options'

export const Board = (props)=>{
    
    useEffect(()=>{
        props.moves.setRows(Math.floor((window.innerHeight*.96)/25));
        props.moves.setCols(Math.floor((window.innerWidth*.98)/25));
    },[props.moves])
    
    return(
        <>  
            <Options moves={props.moves} G={props.G} />
            <main style={{
                position: "relative",
                justifyContent: "center",
                display: "grid",
                gridTemplateColumns: `repeat(${props.G.cols}, ${(props.G.pegSize + props.G.spacing)}px)`,
                gridTemplateRows: `repeat(${props.G.rows}, ${(props.G.pegSize + props.G.spacing)}px)`,
            }}>
                {props.G.grid.map((row, r) => 
                    row.map((col, c)=> 
                    <Peg G={props.G} col={col} moves={props.moves} coord={[r, c]} key={`${r} ${c}`}/>))}
            </main>
        </>
    );
}