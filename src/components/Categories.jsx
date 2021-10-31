import React from 'react';
import Cards from './Cards';
import './Categories.css';
import Product from './Product';
const phoneList = Product.filter(ele=>ele.value==='Phones');
const laptopList = Product.filter(ele=>ele.value==='laptop');
const bookList = Product.filter(ele=>ele.value==='books');
function Categories(props) {
    return (<>
        <div className="categories">
            <h1>Phones</h1>
            <div className="item">
            {phoneList.map((e)=>{
                    return <Cards image={e.image} title={e.heading} description={e.about} price={e.price}/>
                })}
        </div>
        </div>
        <div className="categories">
            <h1>Laptops</h1>
            <div className="item">
            {laptopList.map((e)=>{
                    return <Cards image={e.image} title={e.heading} description={e.about} price={e.price}/>
                })}
        </div>
        </div>
        <div className="categories">
            <h1>Books</h1>
            <div className="item">
            {bookList.map((e)=>{
                    return <Cards image={e.image} title={e.heading} description={e.about} price={e.price}/>
                })}
        </div>
        </div>
    </>
    )
}

export default Categories;
