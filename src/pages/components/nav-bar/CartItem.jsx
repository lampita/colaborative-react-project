import { Button } from "react-bootstrap";

const CartItem = ({ item, deleteFromCart }) => {
  const { image, title, price, id, quantity } = item;
  console.log(item)

  return (
    <div>
      <img src={image} alt="" style={{width:"20%"}} />
      <div>{title}</div>
      <div>
        $ {price} x {quantity} = ${price * quantity}
      </div>
      <Button variant="outline-primary"size= "sm" style={{margin:"0.5rem"}} onClick={() => deleteFromCart(id, false)}>Eliminar uno</Button>
      <Button variant="outline-danger" size= "sm" style={{margin:"0.5rem"}}onClick={() => deleteFromCart(id, true)}>Eliminar todos</Button>
    </div>
  );
};
export default CartItem;
