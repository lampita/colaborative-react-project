import Button from '@/pages/components/cards-a/Button';




const Card = () => {
    return (
        <>
        <figure>
            <img src="aca va url de imagen"></img>
            <figcaption>
                <h3>aca va algo</h3>
            </figcaption>
            <p>aca va el texto de la tarjeta </p>
            <Button/>
        </figure>

        <style jsx>
            {`
                figure {
                    width: 200px;
                    height: 275px;
                    border: 2px solid black;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                img {
                    width: 100%;
                    height: 45%
                    object-fit: cover;
                }
                h3 {
                    font-size: 1 rem;
                    text-align: center;
                    line-height: 0;
                }
                p{
                    font-size: .8rem;
                    text-align: center;
                }
            `}
        </style>
        </>
    )
}

export default Card