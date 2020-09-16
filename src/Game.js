export const LightBoard = {
    setup: (ctx, setupData) => ({
        rows: 0,
        cols: 0,
        pegSize: 25,
        offSet: 0,
        spacing: 0,
        bgColor: "#333333",
        currentColor: "#000000",
        defPeg: {
            color: "#000000",
        },
        grid: [],
    }),
    
    moves:{
        setRows: (G, ctx, n)=>{
            if (n>G.rows){
                for(let i=0; i<(n-G.rows); i++){
                    G.grid.push(Array(G.cols).fill(G.defPeg));
                };
            }else if (n<G.rows){
                for(let i=0; i<(G.rows-n); i++){
                    G.grid.pop();
                };
            };
            G.rows = n;
        },
        setCols: (G, ctx, n)=>{
            if(n>G.cols){
                G.grid.forEach((row)=>{
                    for(let i=0; i<(n-G.cols); i++){
                        row.push(G.defPeg);
                    };
                });
            }else if (n<G.cols){
                G.grid.forEach((row)=>{
                    for(let i=0; i<(G.cols-n); i++){
                        row.pop();
                    };
                });
            }
            G.cols = n;
        },
        pickPeg: (G, ctx, n)=>{G.currentColor = n;},
        setBg: (G, ctx, n)=>{G.bgColor = n;},
        setColor: (G, ctx, r, c)=>{G.grid[r][c]["color"]=G.currentColor},
        setSize: (G, ctx, n)=>{G.pegSize = n;},
        setOffset: (G, ctx, n)=>{G.offSet = n;},
        setSpacing: (G, ctx, n)=>{G.spacing = n;},
        setDefPeg: (G, ctx, n)=>{},
    },

}