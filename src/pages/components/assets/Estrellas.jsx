import Rating from '@mui/material/Rating';


export default function Estrellas(props) {
  

  return (
    
          <Rating name="read-only" value={5} defaultValue={1} readOnly size="small" />
    
  );
}