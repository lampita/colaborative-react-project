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
                padding: 40px 0;
                margin: 20px;
                }
            `}
            </style>
        </>
    )
}

export default Section