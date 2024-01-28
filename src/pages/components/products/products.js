const Product = ({ product, addToCart }) => {
  const { name, price, id } = product;
  return (
    <div>
      <div>{name}</div>
      <div>$ {price}</div>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
export default Product;
