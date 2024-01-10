import CardsContainer from '@/pages/components/cards-a/CardsContainer'




const Section = () => {
    return (
        <>
            <section>
                <h2>Titulo de la seccion</h2>
                <CardsContainer/>
            </section>

            <style jsx>
            {`
            section {
                text-align: center;
                }
            `}
            </style>
        </>
    )
}

export default Section