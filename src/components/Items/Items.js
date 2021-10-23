import React from 'react'
import Cards from '../Cards';
import './Items.css';
function Items() {
    return (
        <div className="item">
            <Cards title="It is a card" description="This is Description" image="https://picsum.photos/seed/picsum/600/900"/>
            <Cards title="It is a card" description="This is Description"/>
            <Cards title="It is a card" description="This is Description"/>
        </div>
    )
}

export default Items;
