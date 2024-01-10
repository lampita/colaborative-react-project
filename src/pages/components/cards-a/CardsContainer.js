import Cards from '@/pages/components/cards-a/Cards'




const tarjetas = [1,2,3,4,5,6,7,8,9,10]

const CardsContainer = () => {
    return (
      <>
        <div>
            {
            tarjetas.map(tarjetasvarias => <Card />)
            }
        </div>

        <style jsx>
            {`
            div {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between; 
                }
            `}
        </style>
      </>  
    )
}

export default CardsContainer




