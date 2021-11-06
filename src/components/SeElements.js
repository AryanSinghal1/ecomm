import React from 'react';
import Product from './Product';
function SeElements(elem) {
    const Search = Product.filter(ele=>ele.heading===elem.name);
    return (
        <div style={{width:'100vw',
        height:'100vh',
        backgroundColor:'white'}}>
            {console.log(Search)}
        </div>
    )
}

export default SeElements;
