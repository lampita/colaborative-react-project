const CartItem = ({ item, deleteFromCart }) => {
  const { image, name, price, id, quantity } = item;

  return (
    <div>
      <img src={image} alt="" />
      <div>{name}</div>
      <div>
        $ {price} x {quantity} = ${price * quantity}
      </div>
      <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button>
      <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};
export default CartItem;
