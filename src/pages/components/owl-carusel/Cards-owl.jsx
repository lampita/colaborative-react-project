import React, { useState } from 'react';
import CardList from './Card-list';


const Cards = () => {
    const [card, setCards] = useState([
        {
            id: 1,
            title: 'Card 1',
            image: 'owl-carusel/cliente1.jpeg',
        },
        {
            id: 2,
            title: 'Card 2',
            image: 'owl-carusel/cliente2.jpeg',
        },
        {
            id: 3,
            title: 'Card 3',
            image: 'owl-carusel/cliente5.jpeg',
        },
        {
            id: 4,
            title: 'Card 4',
            image: 'owl-carusel/cliente4.jpeg',
        },
        {
            id: 5,
            title: 'Card 5',
            image: 'owl-carusel/cliente10.jpeg',
        },
        {
            id: 6,
            title: 'Card 6',
            image: 'owl-carusel/cliente11.jpeg',
        },
        {
            id: 7,
            title: 'Card 7',
            image: 'owl-carusel/cliente12.jpeg',
        }
    ]);

    return (

        <>
            <div className="container.tarjetas">
                <div className="tarjetas">
                    {card.map((card) => {
                        return (
                            <>
                                <div>
                                    <CardList
                                        img={card.image}
                                        title={card.title}
                                        key={card.id} />
                                </div>

                            </>
                        );

                    })}
                </div>
            </div>
            <style jsx>{`
            .tarjetas{
                display: flex;
                padding: 5px;
                width: 100%;
            }
            `}
            </style>
        </>
    );
};

export default Cards