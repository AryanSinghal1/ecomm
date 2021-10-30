import React from 'react';
import Cards from './Cards';
import './Categories.css';

function Categories(props) {
    return (
        <div className="categories">
            <h1>This is {props.Cat} Category</h1>
            <div className="item">
            <Cards title="It is a card" description="This is Description" image="https://picsum.photos/seed/picsum/600/900" />
            <Cards title="It is a card" description="This is Description" image="https://picsum.photos/seed/picsum/600/900" />
            <Cards title="It is a card" description="This is Description" image="https://picsum.photos/seed/picsum/600/900" />
            
        </div>
        </div>
    )
}

export default Categories;
