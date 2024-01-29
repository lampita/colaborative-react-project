import CardsContainer from './CardsContainer'




const Section = () => {
    return (
        <>
            <section>
                <CardsContainer/>
            </section>

            <style jsx>
            {`
            section {
                text-align: center;
                padding: 50px 0;
                margin: 40px;
                }
            `}
            </style>
        </>
    )
}

export default Section