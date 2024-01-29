import Button from './Button'




const Cards = ({tarjetasvarias}) => {

    const {img, title, bgcolor} = tarjetasvarias;

    return (
        <>
        <figure>
            <img src={img} alt={title}/>
            <figcaption>

            </figcaption>
        </figure>

        <style jsx>
            {`
                figure {
                    width: 200px;
                    height: 250px;
                    border: 1px solid black;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                } 
            `}
        </style>
        </>
    )
}

export default Cards;