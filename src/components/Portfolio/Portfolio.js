import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';


function Portfolio({image,text}) {
    return (
        <div>
           <div>
                {image.map((elem,i) => <PortfolioItem Image={elem} key={i}/>)}
           </div>
        </div>

    );
}

export default Portfolio;