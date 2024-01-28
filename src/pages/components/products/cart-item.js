const CartItem = ({ item, deleteFromCart }) => {
  const { name, price, id, quantity } = item;

  return (
    <div>
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
