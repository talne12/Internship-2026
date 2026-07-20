import react from 'react';


function Spread(...args){
    for(let i in args){
        console.log(args[i]);

    }
}
Spread(1,2,3,4,5,6);

// export default Spread;
export default Spread;