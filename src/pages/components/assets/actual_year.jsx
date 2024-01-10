
const year=new Date().getFullYear()

const ActualYear = () => {
    return (
      <p>{year}</p>
    )
  };

const Copy =() =>{
  return (
<p>Copyrigh &#9426; {ActualYear()}</p>

  )
};

export default ActualYear
export {Copy}