import React from 'react';

function Food({ fav }) {
    return (
        <h1>I like {fav}</h1>
    );
}

let foodILike = ['김치', '라면', '컵라면', '시금치나물', '피자'];

function App() {
    return (
        <div>
            <h1>Hello</h1>
            {foodILike.map((dish, index) => {
                return (
                    <Food
                        fav={dish}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default App;