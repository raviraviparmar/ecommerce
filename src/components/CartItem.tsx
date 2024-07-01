import { CartItem as CartItemType } from '../context/CartContext';
import { useCart } from '../context/CartContext';

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
        <div>
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-700">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
          className="w-16 p-2 border border-gray-300 rounded mr-4"
        />
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
