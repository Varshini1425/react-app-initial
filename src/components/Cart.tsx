interface Props {
  cartItemsProp: string[];
  onClear: () => void;
}

const Cart = ({ cartItemsProp, onClear }: Props) => {
  return (
    <>
      <div>Cart : {cartItemsProp}</div>
      <ul>
        {cartItemsProp.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
