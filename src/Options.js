import React from 'react';
import './Options.css';

function Options(props){
    return (
        <form 
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <label>
                    Rows
                    <input 
                        type="number" 
                        value={props.G.rows} 
                        onChange={(e)=> props.moves.setRows(Number(e.target.value))}
                        min="0"
                         />
                </label><label>
                    Columns
                    <input 
                        type="number" 
                        value={props.G.cols} 
                        onChange={(e)=> props.moves.setCols(Number(e.target.value))}
                        min="0"
                        />
                </label><label>
                    Size
                    <input 
                        type="number" 
                        value={props.G.pegSize} 
                        onChange={(e)=> props.moves.setSize(Number(e.target.value))}
                        min="0"
                        />
                </label><label>
                    Spacing
                    <input 
                        type="number" 
                        value={props.G.spacing} 
                        onChange={(e)=> props.moves.setSpacing(Number(e.target.value))}
                        />
                </label><label>
                    Offset
                    <input 
                        type="range" 
                        value={props.G.offSet} 
                        onChange={(e)=> props.moves.setOffset(Number(e.target.value))}
                        min="-95"
                        max="95"
                        />
                </label><label>
                    Grab a color
                    <input 
                        type="color" 
                        value={props.G.currentColor} 
                        onChange={(e)=> props.moves.pickPeg(e.target.value)}
                        />
                </label>
                
        </form>
    )
}

export default Options;